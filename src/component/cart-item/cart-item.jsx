import {
  Div_CartContainer,
  Div_ItemDtails,
  Span_Name
} from './cart-item.styles.jsx'

const CartItem = ({cartItem}) => {
  const {name, quantity, price, imageUrl} = cartItem
  
  return (
    <Div_CartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Div_ItemDtails>
        <Span_Name>{name}</Span_Name>
        <span>
          {quantity} x ${price}
        </span>
      </Div_ItemDtails>
    </Div_CartContainer>
  )
}

export default CartItem;