import { compose, legacy_createStore as createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './redux.saga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const sagaMiddleware= createSagaMiddleware();

const persistingReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(persistingReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
