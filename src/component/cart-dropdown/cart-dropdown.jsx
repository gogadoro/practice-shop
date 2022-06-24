import './cart-dropdown.scss'
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
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((eachItem) =>
          <CartItem key={eachItem.id} cartItem={eachItem}/>)}
      </div>
      <Button onClick={goToCheckoutHandler} buttonType='inverted' >나의 장바구니</Button>
    </div>
  )
}

export default CartDropdown