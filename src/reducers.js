import { combineReducers } from 'redux'
import preLoginReducer from '../src/state/reducers/auth/preLoginReducer'
import appReducer from '../src/state/reducers/appReducer'
import headerReducer from './state/reducers/header/headerReducer';
import homeReducer from './state/reducers/home/homeReducer';

const rootReducer = combineReducers({
  user: preLoginReducer,
  app: appReducer,
  genres: headerReducer,
  movies: homeReducer
})

export default rootReducer