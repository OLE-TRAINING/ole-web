import { combineReducers } from 'redux'

import authReducer from '../src/state/auth/reducers/authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer