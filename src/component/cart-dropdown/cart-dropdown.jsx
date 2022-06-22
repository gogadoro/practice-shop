import {useContext} from 'react'
import { CartContext } from '../../context/cart.context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.scss';


const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/> 
        ))}
      </div>
      <Button>나의 장바구니</Button>
    </div>
  )
}

export default CartDropdown;