import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCR8wdcaCzNTJHa9yoOST241p3hOOD8Fpo",
    authDomain: "practice-shop-db-1ad74.firebaseapp.com",
    projectId: "practice-shop-db-1ad74",
    storageBucket: "practice-shop-db-1ad74.appspot.com",
    messagingSenderId: "631247507579",
    appId: "1:631247507579:web:cb6839dc34037bffbed2de"
};

const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

export const auth = getAuth();
export const signIn_GooglePopup = () => signInWithPopup(auth, GoogleProvider)
export const signIn_GoogleRedirect = () => signInWithRedirect(auth, GoogleProvider)


export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('done')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}

export const setUserDbFromAuth = async (
    userAuth,
    additionalInfor={}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const email = userAuth.email;
        const displayName = userAuth.displayName;
        const createdAt = new Date();

        try {
            await setDoc(
                userDocRef,
                {
                    email,
                    displayName,
                    createdAt,
                    ...additionalInfor
                }
            );
        } catch (eer) {
            console.log('error creating the user', eer.message);
        }
    }

    return userSnapshot;
}

export const createUserAuthWithEmailAndPassword = async (email, password) => {
    if (!email | !password) {
        console.log('이메일,암호가 전달되지 않음');
        return;
    }

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
    if (!email | !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => { 
                unsubscribe(); 
                resolve(userAuth);}, 
            reject
            );
    });
}