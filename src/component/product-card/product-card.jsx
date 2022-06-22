import Button from '../button/button';
import './product-card.scss';
import {useContext} from 'react';
import { CartDropDownContext } from '../../context/cart-dropdown.context';

const ProductCard = ({product}) => {
  const {name,price,imageUrl} = product;
  const {cartItems, setCartItems} = useContext(CartDropDownContext);

  const goToDropdown = (event) => {
    console.log(event.target)
    setCartItems(event.target)
    console.log('context:', cartItems)
  }
  
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={goToDropdown} buttonType='inverted'>카트에 담기</Button>
    </div>
  )
}

export default ProductCard;