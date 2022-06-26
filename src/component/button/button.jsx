import {
  BaseBtn,
  GoogleSignInBtn,
  InvertedBtn
} from './button.styles.jsx';

export const BUTTON_TYPE = {
  base : 'base',
  google : 'google',
  inverted : 'inverted'
}

const getBtn = (buttonType = BUTTON_TYPE.base) => (
  {
    [BUTTON_TYPE.base]: BaseBtn,
    [BUTTON_TYPE.google]: GoogleSignInBtn,
    [BUTTON_TYPE.inverted]: InvertedBtn,
  }[buttonType])

const Button = ({children, buttonType, ...otherProps}) => {
  const CustomBtn = getBtn(buttonType)
  
  return <CustomBtn {...otherProps} >{children}</CustomBtn>
}

export default Button;