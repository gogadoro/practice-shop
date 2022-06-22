import './button.scss';

const Button = ({children, buttonType, ...otherProps}) => {
  const BUTTON_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted',
  }

  return (
    <button className={
      `button-container ${BUTTON_TYPE[buttonType]}`
      } {...otherProps}>
      {children}
    </button>
  )
}

export default Button;