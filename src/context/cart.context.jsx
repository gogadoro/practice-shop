import {useState, createContext} from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartToDropdown: ()=>{},
})

const filteringItem = (itemToAdd, cartItems) => {
  const existingItem = cartItems.find(
    (eachItem) => eachItem.id === itemToAdd.id
  );

  console.log('existingItem :', existingItem)

  if (existingItem) {
    return cartItems.map((eachItem) => (
      eachItem.id === itemToAdd.id 
      ? {...eachItem , quantity: eachItem.quantity + 1}
      : eachItem  
    ))
  }

  return [...cartItems, { ...itemToAdd, quantity: 1}]
}

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const addCartToDropdown = (itemToAdd) => {
    setCartItems(filteringItem(itemToAdd, cartItems))
  }

  const value = {isCartOpen, setIsCartOpen, addCartToDropdown, cartItems}

  return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}
