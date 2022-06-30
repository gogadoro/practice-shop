import { call, all } from 'redux-saga/effects'
import { categoriesSaga } from './cartegory/category.saga'
import { userSaga } from './user/user.saga'

export function* rootSaga() {
   yield all([call(categoriesSaga) , call(userSaga)])
}