import { combineReducers } from 'redux'

import authReducer from '../src/state/reducers/auth/authReducers'

const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer