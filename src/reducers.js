import { combineReducers } from 'redux'
import preLoginReducer from '../src/state/reducers/auth/preLoginReducer'
import loaderReducer from '../src/state/reducers/auth/loaderReducer'

const rootReducer = combineReducers({
  user: preLoginReducer,
  loader: loaderReducer
})

export default rootReducer