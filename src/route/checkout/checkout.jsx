import { useContext } from 'react'
import { CartContext } from "../../context/cart.context";
import CheckOutItem from '../../component/checkout-item/checkout-item';

import './checkout.scss';


const CheckOut = () => {
  const { cartItems, totalCount} = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((each) =>
        <CheckOutItem key={each.id} product={each} />
      )}
      <span className='total'>Total: ${totalCount}</span>
    </div>
  )
}

export default CheckOut;