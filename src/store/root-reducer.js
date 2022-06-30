import { combineReducers } from 'redux'

import { categoryRecuder } from './cartegory/category.reducer'
import { userReducer } from './user/user.reducer'
import { cartReducer } from './cart/cart.reducer'

export const rootReducer = combineReducers({
   user: userReducer,
   category: categoryRecuder,
   cart: cartReducer,
})