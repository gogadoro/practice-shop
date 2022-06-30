import {useState} from 'react';
import {signInUserAuthWithEmailAndPassword} from '../../utils/firebase/firebase';
import InputForm from '../input-form/input-form';
import Button, {BUTTON_TYPE} from '../button/button';
import {Div_BtnContainer, Div_SignInContainer} from './sign-in-form.styles.jsx'
import { useDispatch } from 'react-redux';
import { 
  signInGoogleStart,
  signInEmailStart,
} from '../../store/user/user.action'


const defaultFormFields = { 
  email : '',
  password : '',
}

const SignInForm = () => {
  const dispatch = useDispatch()
  const [getStateUser, setStateUser] = useState(defaultFormFields);
  const {email, password} = getStateUser;

  const logUser_Google = async () => {
    dispatch(signInGoogleStart())
}

  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setStateUser({...getStateUser, [name]:value})
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInEmailStart(email, password))

    } catch (err) {

      switch(err.code) {
        case 'auth/wrong-password' :
          alert('비밀번호를 다시 확인해주세요')
          break;
        case 'auth/user-not-found' :
          alert('잘못된 이메일 주소 입니다')
          break;
        default:
        console.log(err)
      }
    }
  }  


  return (
    <Div_SignInContainer>
      <h2>기존 아이디로 로그인</h2>
      <span>이메일로 로그인하기</span>
      <form onSubmit={(e) => {submitHandler(e)}}>
        <InputForm
          label='이메일'
          onChange={changeHandler}
          type='email'
          name='email'
          value={email}
        ></InputForm>
        
        <InputForm
          label='비밀번호'
          onChange={changeHandler}
          type='password'
          name='password'
          value={password}
        ></InputForm>
    
        <Div_BtnContainer>
          <Button type='submit'>로그인</Button>
          <Button
            type='button'
            onClick={logUser_Google}  
            buttonType={BUTTON_TYPE.google}
          > 
            구글로 로그인하기
          </Button>
        </Div_BtnContainer>
      </form>
    </ Div_SignInContainer>
  )
}

export default SignInForm;