import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import {
  Img_ShoppingIcon, Div_IconContainer, Span_ItemCount
} from './cart-icon.styles.jsx'


const CartIcon = () => {
  const { isOpenCart, setIsOpenCart, cartCount } = useContext(CartContext);

  const toggle = () => {
    setIsOpenCart(!isOpenCart)
  }

  return (
    <Div_IconContainer onClick={toggle}>
      <Img_ShoppingIcon />
      <Span_ItemCount>{cartCount}</Span_ItemCount>
    </Div_IconContainer>
  )
}

export default CartIcon;