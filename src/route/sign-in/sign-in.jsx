import { signIn_GooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {

    const logUser_Google = async () => {
        const response = await signIn_GooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h1>로그인 , 회원가입</h1>
            <button onClick={logUser_Google}>
                    Login with Google
            </button>
        </div>
    )
}

export default SignIn;