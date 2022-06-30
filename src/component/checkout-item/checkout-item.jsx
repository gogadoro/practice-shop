import { useSelector, useDispatch } from 'react-redux'

import {callAddCartItem ,
        callDecreaseCartItem,
        callRemoveCartItem} from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import './checkout-item.scss'



const CheckOutItem = ({ product }) => {
  const { name, price, quantity, imageUrl } = product
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const increaseHandler = () => dispatch(callAddCartItem(product, cartItems))
  const decreaseHandler = () => dispatch(callDecreaseCartItem(product, cartItems))
  const removeHandler = () => dispatch(callRemoveCartItem(product, cartItems))

  
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decreaseHandler}>
          &#10094;
        </div>
        <span className='value'> {quantity} </span>
        <div className='arrow' onClick={increaseHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={removeHandler}>&#10005;</div>
    </div>
  )
}

export default CheckOutItem;