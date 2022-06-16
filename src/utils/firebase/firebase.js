import { InitializeApp } from 'firebase/app';
import { getAuth, 
        singInWithReDirection, 
        singInWithPopup, 
        GoogleAuthPorvider } 
        from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCR8wdcaCzNTJHa9yoOST241p3hOOD8Fpo",
    authDomain: "practice-shop-db-1ad74.firebaseapp.com",
    projectId: "practice-shop-db-1ad74",
    storageBucket: "practice-shop-db-1ad74.appspot.com",
    messagingSenderId: "631247507579",
    appId: "1:631247507579:web:cb6839dc34037bffbed2de"
};

const firebaseApp = InitializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthPorvider();

export const auth = getAuth();
export const signIn_GooglePopup = () => singInWithPopup(auth, GoogleProvider)