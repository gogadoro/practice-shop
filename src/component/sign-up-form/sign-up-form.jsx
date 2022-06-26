import {useState} from 'react';
import {createUserAuthWithEmailAndPassword,
        setUserDbFromAuth 
        } from '../../utils/firebase/firebase';
import InputForm from '../input-form/input-form';
import Button,{BUTTON_TYPE} from '../button/button'
import {Div_SignUpContainer} from './sign-up-form.styles.jsx';

const defaultFormFields = { 
        displayName : '',
        email : '',
        password : '',
        confirmPassword : '',
    }

const SignUpForm = () => {
    const [getUserState, setUserState] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = getUserState;


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUserState({...getUserState, [name]:value});
        // ***이부분 복습필요
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
            return;
        }

        try {
            const {user} = await createUserAuthWithEmailAndPassword(
                email, 
                password
            );

            await setUserDbFromAuth(user, {displayName})

        } catch (err) {
            if(err.code === 'auth/email-already-in-use') {
                alert('이미 가입된 회원입니다.')
            } else {
                console.log('유저생성 에러 발생', err)
            }
        }
    }


    return (
        <Div_SignUpContainer>
            <h2>아직 회원이 아니시군요?</h2>
            <span>새 이메일로 회원가입하기</span>
            <form onSubmit={(form) => {submitHandler(form)}}>
                
                <InputForm
                    label='이름' 
                    onChange={changeHandler} 
                    required 
                    type='text'
                    name='displayName'
                    value={displayName}
                />

                <InputForm
                    label='이메일'
                    onChange={changeHandler} 
                    required 
                    type='email'
                    name='email'
                    value={email}
                />

                <InputForm
                    label='비밀번호'
                    onChange={changeHandler} 
                    required 
                    type='password'
                    name='password'
                    value={password}
                />

                <InputForm          
                    label='비밀번호 확인'
                    onChange={changeHandler} 
                    required 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                />
                <Button buttonType={BUTTON_TYPE.base} type='submit'>가입신청</Button>
            </form>
        </Div_SignUpContainer>
    )
}

export default SignUpForm;