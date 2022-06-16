import { useEffect } from 'react';
import { getRedirectResult } from "firebase/auth";

import {
    signIn_GooglePopup,
    setUserDbFromAuth,
    auth,
    signIn_GoogleRedirect
} from "../../utils/firebase/firebase";

const SignIn = () => {

    
    useEffect( () => {
        // useEffect fst param 으로는 동기적 함수가 와야한다고 해서 이너함수를 만듬.
        const fakeFunction = async () => {
            const response = await getRedirectResult(auth);
            
            if (response) {
                const userDocRef = await setUserDbFromAuth(response.user);
            } else {
                return;
            }
        }
        fakeFunction();
    }, []);
    

    const logUser_Google = async () => {
        const { user } = await signIn_GooglePopup();
        const userDocRef = await setUserDbFromAuth(user);
    }


    return (
        <div>
            <h1>Login , Sign In</h1>
            <button onClick={logUser_Google}>
                Login with Google
            </button>
            <button onClick={signIn_GoogleRedirect}>
                Login with Google Redirect
            </button>
        </div>
    )
}

export default SignIn; 