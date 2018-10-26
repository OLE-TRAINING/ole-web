import { combineReducers } from 'redux'
import preLoginReducer from '../src/state/reducers/auth/preLoginReducer'

const rootReducer = combineReducers({
  user: preLoginReducer
})

export default rootReducer