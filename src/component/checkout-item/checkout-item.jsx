import { useContext } from 'react'
import { CartContext } from "../../context/cart.context";
import './checkout-item.scss'

const CheckOutItem = ({ product }) => {
  const { goToCart, decreaseCartItem, removeCartItem } = useContext(CartContext)
  const { name, price, quantity, imageUrl } = product

  const increaseHandler = () => goToCart(product)
  const decreaseHandler = () => decreaseCartItem(product)
  const removeHandler = () => removeCartItem(product)

  
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