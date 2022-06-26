import SignUpForm from '../../component/sign-up-form/sign-up-form';
import SignInForm from '../../component/sign-in-form/sign-in-form';
import {Div_AuthContainer} from './sign-in.styles.jsx';

import {
    signIn_GooglePopup,
} from "../../utils/firebase/firebase";


const SignIn = () => {

    const logUser_Google = async () => {
        await signIn_GooglePopup();
    }


    return (
        <Div_AuthContainer>
            <SignInForm logGoogle={logUser_Google} />
            <SignUpForm />
        </Div_AuthContainer>
    )
}

export default SignIn; 