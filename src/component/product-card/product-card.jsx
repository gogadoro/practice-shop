import { useDispatch, useSelector } from 'react-redux';

import Button, {BUTTON_TYPE} from '../button/button';
import { Div_ProductContainer, Div_Footer, Span_Name, Span_Price,} from './product-card.styles.jsx';
import { callAddCartItem } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const {name,price,imageUrl} = product;
  
  const addItemToCart = () => {
    dispatch(callAddCartItem(product, cartItems))
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