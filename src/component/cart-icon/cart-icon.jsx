import { useSelector, useDispatch } from 'react-redux'

import {
  Img_ShoppingIcon, Div_IconContainer, Span_ItemCount
} from './cart-icon.styles.jsx'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { setIsCartOpen } from '../../store/cart/cart.action.js'



const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen) 
  const cartCount = useSelector(selectCartCount)

  const toggle = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <Div_IconContainer onClick={toggle}>
      <Img_ShoppingIcon />
      <Span_ItemCount>{cartCount}</Span_ItemCount>
    </Div_IconContainer>
  )
}

export default CartIcon;