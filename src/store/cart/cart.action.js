import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPE } from "./cart.types";


// 이곳의 최종 결과물은 액션.  
// const setData = (date) => createAction (type, data)


export const setIsCartOpen = (boolean) =>
   createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean)


// main 함수들

const addCartItem = (productToGo, cartItems) => {
   const existingProduct = cartItems.find((each) => (   // 기존에 있으면 퀀티티만 추가, 기존에 없으면 새로추가. 항상 배열을 건드릴때는 그 구조에 대해서 생각
      each.id === productToGo.id
   ))
   if (existingProduct) {                   // 곂친경우니까 퀀티티만 더해줘야함. 나머지는 그대로 놓고 어떻게 퀀티티만 추가할거냐?
      return cartItems.map((each) => (       // 맵을 활용할거다. 그래서 있는애면 아이디가 곂칠테니까 걔만 퀀티티+1 나머지는 안건드리고 리턴
         each.id === productToGo.id
            ? { ...each, quantity: each.quantity + 1 }
            : each
      ))
   }
   return [...cartItems, { ...productToGo, quantity: 1 }]
}


const decreaseCartItem = (theProduct, cartItems) => {
   if (theProduct.quantity === 1) {
      return cartItems.filter((item) => item.id !== theProduct.id)
   } else {
      return cartItems.map((each) => (
         each.id === theProduct.id
            ? { ...each, quantity: each.quantity - 1 }
            : each
      ))
   }
}

const removeCartItem = (theProduct, cartItems) =>
   cartItems.filter((item) => item.id !== theProduct.id)


// call 함수들 

export const callDecreaseCartItem = (theProduct, cartItems) => {
   return createAction(CART_ACTION_TYPE.SET_CART_ITEM, decreaseCartItem(theProduct, cartItems))
}

export const callRemoveCartItem = (theProduct, cartItems) => {
   return createAction(CART_ACTION_TYPE.SET_CART_ITEM, removeCartItem(theProduct, cartItems))
}

export const callAddCartItem = (productToGo, cartItems) => {
   return createAction(CART_ACTION_TYPE.SET_CART_ITEM, addCartItem(productToGo, cartItems))
}


// export const callDecreaseCartItem = (theProduct, cartItems) => {
//    const newCartItem = decreaseCartItem(theProduct, cartItems)
//    console.log('변수선언 :', newCartItem)
//    createAction(CART_ACTION_TYPE.SET_CART_ITEM, newCartItem)
// }
