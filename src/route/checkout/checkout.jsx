import { useSelector } from 'react-redux';
import CheckOutItem from '../../component/checkout-item/checkout-item';
import { selectCartItems, selectTotalCount } from '../../store/cart/cart.selector';

import './checkout.scss';


const CheckOut = () => {
  const cartItems = useSelector(selectCartItems)
  const totalCount = useSelector(selectTotalCount)

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