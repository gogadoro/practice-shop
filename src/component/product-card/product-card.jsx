import Button from '../button/button';
import './product-card.scss';
import {useContext} from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({product}) => {
  const {name,price,imageUrl} = product;
  const {addCartToDropdown} = useContext(CartContext);
  
  const addProdcutToCart = () => addCartToDropdown(product)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={addProdcutToCart} buttonType='inverted'>카트에 담기</Button>
    </div>
  )
}

export default ProductCard;