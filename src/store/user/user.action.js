import { USER_ACTION_TYPE } from "./user.types"
import { createAction } from "../../utils/reducer/reducer.utils"

export const setCurrentUser = (user) =>
   createAction(USER_ACTION_TYPE.SET_CURRENT_USER , user)

export const checkUserSession = () => 
   createAction(USER_ACTION_TYPE.CHECK_USER_SESSION);

export const signInGoogleStart = () => 
   createAction(USER_ACTION_TYPE.SIGN_IN_GOOGLE_START);

export const signInEmailStart = (email, password) => 
   createAction(USER_ACTION_TYPE.SIGN_IN_EMAIL_START, {email, password});

export const signInSuccess = (user) => 
   createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user);

export const signInFaild = (error) => 
   createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error)

export const signUpStart = (email, password, displayName) =>
   createAction(USER_ACTION_TYPE.SIGN_UP_START, {email, password, displayName})

export const signUpSuccess = (user, etc) => 
   createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, {user, etc})

export const signUpFailed = (error) => 
   createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error)

export const signOutStart = () =>
   createAction(USER_ACTION_TYPE.SIGN_OUT_START)

export const signOutSuccess = () => 
   createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS)

export const signOutFailed = (err) =>
   createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, err)
