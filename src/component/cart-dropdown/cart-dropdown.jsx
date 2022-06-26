import {
  Div_DropdownContainer,
  Span_EmptyMsg,
  Div_CartItems
} from './cart-dropdown.styles.jsx'
import Button from '../button/button'
import {useContext} from 'react'
import CartItem from '../../component/cart-item/cart-item'
import { CartContext } from '../../context/cart.context'
import {useNavigate} from 'react-router-dom'

const CartDropdown = () => {

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  const {cartItems} = useContext(CartContext);

  return (
    <Div_DropdownContainer>
      <Div_CartItems>
      { cartItems.length
      ? cartItems.map((eachItem) =>
        <CartItem key={eachItem.id} cartItem={eachItem}/>)
      : <Span_EmptyMsg>카트에 담은 물건이 없습니다</Span_EmptyMsg>}
      </Div_CartItems>
      <Button onClick={goToCheckoutHandler} buttonType='base' >나의 장바구니</Button>
    </Div_DropdownContainer>
  )
}

export default CartDropdown