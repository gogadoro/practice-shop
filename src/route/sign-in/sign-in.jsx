import SignUpForm from '../../component/sign-up-form/sign-up-form';
import SignInForm from '../../component/sign-in-form/sign-in-form';
import './sign-in.scss';

import {
    signIn_GooglePopup,
    setUserDbFromAuth,
} from "../../utils/firebase/firebase";


const SignIn = () => {

    const logUser_Google = async () => {
        await signIn_GooglePopup();
    }


    return (
        <div className='authentication-container'>
            <SignInForm logGoogle={logUser_Google} />
            <SignUpForm />
        </div>
    )
}

export default SignIn; 