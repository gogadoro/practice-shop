import Button, {BUTTON_TYPE} from '../button/button';
import {useContext} from 'react';
import { CartContext } from '../../context/cart.context';

import {
  Div_ProductContainer,
  Div_Footer,
  Span_Name,
  Span_Price,
} from './product-card.styles.jsx';


const ProductCard = ({product}) => {
  const {name,price,imageUrl} = product;
  const {goToCart} = useContext(CartContext);
  
  const addItemToCart = () => {
    goToCart(product);
  }

  return (
    <Div_ProductContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Div_Footer>
        <Span_Name>{name}</Span_Name>
        <Span_Price>{price}</Span_Price>
      </Div_Footer>
      <Button 
        onClick={addItemToCart} 
        buttonType={BUTTON_TYPE.inverted}
      > 카트에 담기
      </Button>
    </Div_ProductContainer>
  )
}

export default ProductCard;