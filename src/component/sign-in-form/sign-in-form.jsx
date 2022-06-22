import {useState} from 'react';
import {signInUserAuthWithEmailAndPassword} from '../../utils/firebase/firebase';
import InputForm from '../input-form/input-form';
import Button from '../button/button';
import './sign-in-form.scss'



const defaultFormFields = { 
  email : '',
  password : '',
}

const SignInForm = ({logGoogle}) => {
  const [getStateUser, setStateUser] = useState(defaultFormFields);
  const {email, password} = getStateUser;

  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setStateUser({...getStateUser, [name]:value})
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    
    try {

      const {user} = await signInUserAuthWithEmailAndPassword(
        email, 
        password
      );

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
    <div className='sign-in-container'>
      <h2>이미 계정이 있으시군요</h2>
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
    
        <div className='buttons-container'>
          <Button type='submit'>로그인</Button>
          <Button
            type='button'
            onClick={logGoogle}  
            buttonType='google'
          > 
            구글로 로그인하기
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;