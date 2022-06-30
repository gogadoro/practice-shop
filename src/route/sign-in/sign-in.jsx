import SignUpForm from '../../component/sign-up-form/sign-up-form';
import SignInForm from '../../component/sign-in-form/sign-in-form';
import {Div_AuthContainer} from './sign-in.styles.jsx';

import {
    signIn_GooglePopup,
} from "../../utils/firebase/firebase";


const SignIn = () => {


    return (
        <Div_AuthContainer>
            <SignInForm />
            <SignUpForm />
        </Div_AuthContainer>
    )
}

export default SignIn; 