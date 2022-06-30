import { CART_ACTION_TYPE } from "./cart.types"

export const CART_INITIAL_STATE = {
   isCartOpen: false,
   cartItems: [],
   cartCount: 0,
   totalCount: 0,
}

export const cartReducer = (state = CART_INITIAL_STATE, action={}) => {
   const {type, payload} = action

   switch (type) {
      case CART_ACTION_TYPE.SET_CART_ITEM:
         return {
            ...state,
            cartItems: payload
         }
      case CART_ACTION_TYPE.SET_IS_CART_OPEN:
         return {
            ...state,                // 불리언값만 건들면되는데 ..state를 하는걸보니 reducer는 하나의 리듀서에서 하나의 스테이트에 모든 값들을 저장하나 보다.
            isCartOpen: payload      // 그러네.. 이니셜 스테이트 오브젝트 안을 보면 초기값들이 하나의 오브젝트로 들어있음. 즉 해당 리듀서의 스테이트는 하나의 오브젝트.
         }
      default:
         return state
   }
}