import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider } from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc, } from 'firebase/firestore';

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

export const setUserDbFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log('docRef :', userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    console.log('snapshot :', userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const email = userAuth.email;
        const displayName = userAuth.displayName;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {email, displayName, createdAt});
        } catch (eer) {
            console.log('error creating the user', eer.message);
        }
    }

    return userDocRef;
}