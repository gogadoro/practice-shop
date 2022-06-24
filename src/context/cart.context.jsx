import {createContext, useState, useEffect} from 'react'

//-------- 기타 함수

const filteringProduct = (productToGo, cartItems) => {
  // 기존에 있으면 퀀티티만 추가, 기존에 없으면 새로추가. 항상 배열을 건드릴때는 그 구조에 대해서 생각
  const existingProduct = cartItems.find((each) => (
    each.id === productToGo.id
  ))

  if (existingProduct) {
    // 곂친경우니까 퀀티티만 더해줘야함. 나머지는 그대로 놓고 어떻게 퀀티티만 추가할거냐?
    // 맵을 활용할거다. 그래서 있는애면 아이디가 곂칠테니까 걔만 퀀티티+1 나머지는 안건드리고 리턴
    return cartItems.map((each) => (
      each.id === productToGo.id
      ? {...each, quantity: each.quantity + 1}
      : each
    ))
  }

  return [...cartItems, {...productToGo, quantity: 1}]
}

const decreaseQuantity = (theProduct, cartItems) => {
  
  if (theProduct.quantity === 1) {
    return   cartItems.filter((item) => item.id !== theProduct.id)
  } else {
    return cartItems.map((each) => (
      each.id === theProduct.id 
      ? {...each, quantity: each.quantity - 1}
        : each
    ))
  }
}

const removeTheProduct = (theProduct, cartItems) => (
  cartItems.filter((item) => item.id !== theProduct.id)
)



//--------- 컨텍스트

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  goToCart: () => {},
  cartCount: 0,
  decreaseCartItem: () => {},
  removeCartItem:() => {},
  totalCount: 0,
})


export const CartProvider = ({children}) => {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  
  const goToCart = (productToGo) => {
    setCartItems(filteringProduct(productToGo, cartItems))
  }

  const decreaseCartItem = (theProduct) => {
    setCartItems(decreaseQuantity(theProduct, cartItems))
  }

  const removeCartItem = (theProduct) => {
    setCartItems(removeTheProduct(theProduct, cartItems))
  }


  useEffect(()=>{
    const newCartCount = cartItems.reduce((total, cartItem) =>
    total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  },[cartItems])


  useEffect(()=>{
    const newTotalCount = cartItems.reduce((total, cartItem) =>
    total + (cartItem.quantity * cartItem.price)  , 0)
    setTotalCount(newTotalCount)
  },[cartItems])
  
  const value = {
    isOpenCart, 
    setIsOpenCart, 
    cartItems, 
    goToCart, 
    cartCount,
    decreaseCartItem,
    removeCartItem,
    totalCount,
  }
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


/*로직 : 카트 아이템 삭제

기능 - x표시를 누르면 cartItems안에서 해당 아이템 삭제

1. x클릭 -> 함수 : cartItem.filter((item) => { 로직 : item.id !== itemToDel.id })
2. 문제는 itemToDel 을 어떻게 알아올 것이냐? 
   -> 체크아웃 아이템에서 버튼을 누르는거기 때문에 필요한 타겟 정보가 해당 컴포넌트에 있음
3. 

*/
