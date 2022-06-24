import { ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import './cart-icon.scss'


const CartIcon = () => {
  const { isOpenCart, setIsOpenCart, cartCount } = useContext(CartContext);

  const toggle = () => {
    setIsOpenCart(!isOpenCart)
  }
  
  return (
    <div className='cart-icon-container' onClick={toggle}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;