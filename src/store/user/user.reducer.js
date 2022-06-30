/* 리듀서를 쓰려면 순서가 있다

1. 리듀서가 있어야한다. 그리고 걔네들은 state action 을 받는다

action 은 dispatch를 통해 전달한다

action 안에는 type , payload 가 있다. 


*/

import { USER_ACTION_TYPE } from "./user.types"

const USER_INITIAL_STATE = {
   currentUser: null,
   isLoading: false,
   error: null,
}

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
   const { type, payload } = action

   switch (type) {
      case USER_ACTION_TYPE.SET_CURRENT_USER:
         return { ...state, currentUser: payload }
      case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
         return { ...state, currentUser: null }
      case USER_ACTION_TYPE.SIGN_OUT_FAILED:
      case USER_ACTION_TYPE.SIGN_IN_FAILED:
      case USER_ACTION_TYPE.SIGN_UP_FAILED:
         return { ...state, error: payload };
      default:
         return state
   }
}