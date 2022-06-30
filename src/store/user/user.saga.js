import { takeLatest, put, all, call } from "redux-saga/effects";
import  {
   getCurrentUser, 
   setUserDbFromAuth,
   signIn_GooglePopup,
   signInUserAuthWithEmailAndPassword,
   createUserAuthWithEmailAndPassword,
   signOutUser, } from '../../utils/firebase/firebase'
import { 
   setCurrentUser,
   signInFaild, 
   signInSuccess, 
   signOutFailed, 
   signOutSuccess, 
   signUpFailed, 
   signUpSuccess, } from "./user.action";
import { USER_ACTION_TYPE } from "./user.types";



export function* getSnapshotFromUser (userAuth, etc) {
   try {
      const userSnapshot = yield call(
         setUserDbFromAuth, 
         userAuth, 
         etc
      ) 
      yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
   } catch(error) {
      yield put(signInFaild(error));
   }
}

export function* signInWithGoogle () {
   try {
      const {user} = yield call(signIn_GooglePopup);
      console.log('google userAuth: ', user);

      yield call(getSnapshotFromUser, user);

   } catch (error) {
      yield put(signInFaild(error));
   }
}

export function* signInWithEmail ({payload: {email, password}}) {
   try {
      const {user} = yield call(signInUserAuthWithEmailAndPassword, email, password)
      yield put(setCurrentUser(user))
      yield call(getSnapshotFromUser, user)
   }  catch (error) {
      yield put(signInFaild(error))
   }
}

export function* isUserAuthenticated () {
   try {
      const userAuth = yield call(getCurrentUser)
      if(!userAuth) return
      yield call(getSnapshotFromUser, userAuth)
   } catch (error) {
      yield put(signInFaild(error))
   }
}

export function* signUp ({payload: {email, password, displayName}}) {
   try {
      const {user} = yield call(
         createUserAuthWithEmailAndPassword, 
         email, 
         password
      )
      yield put(signUpSuccess(user, {displayName: displayName}));
   } catch (error) {
      put(signUpFailed(error))
   }
}

export function* signInAfterSignUp ({payload: {user, etc}}) {
   yield call (getSnapshotFromUser, user, etc)
}

export function* signOut () {
   try {
      yield call(signOutUser)
      yield put(signOutSuccess())
   } catch(err) {
      yield put(signOutFailed(err))
   }
}

// ------------------ entry

export function* onCheckUserSession () {
   yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
   yield takeLatest(USER_ACTION_TYPE.SIGN_IN_GOOGLE_START, signInWithGoogle)
}

export function* onEmailSignInStart () {
   yield takeLatest(USER_ACTION_TYPE.SIGN_IN_EMAIL_START, signInWithEmail)
}

export function* onSingUpStart () {
   yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess () {
   yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart () {
   yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut)
}

export function* userSaga () {
   yield all([
      call(onCheckUserSession),
      call(onGoogleSignInStart),
      call(onEmailSignInStart),
      call(onSingUpStart),
      call(onSignUpSuccess),
      call(onSignOutStart),
   ]);
}