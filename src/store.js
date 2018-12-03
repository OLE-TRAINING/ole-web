import { createStore, applyMiddleware } from 'redux'
import storage from 'redux-persist/es/storage'

import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import promise from 'redux-promise' //https://www.npmjs.com/package/redux-promise
import thunk from 'redux-thunk' //https://www.npmjs.com/package/redux-thunk

const persistConfig = ({ 
  key: 'root', 
  storage,
  whitelist: ['user', 'genres']
})

const persistedReducer = persistReducer(persistConfig, reducers)

const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, thunk)(createStore)(persistedReducer, devTools)
let persistor = persistStore(store)

export { store, persistor }