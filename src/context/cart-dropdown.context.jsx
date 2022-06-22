import {useState, createContext} from 'react';

export const CartDropDownContext = createContext({
  cartItems: []
})

export const CartDropDownProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const value = { cartItems, setCartItems}

  return <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
}

