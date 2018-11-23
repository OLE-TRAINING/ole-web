const SHOW_LOADER = 'SHOW_LOADER'
const HIDDEN_LOADER = 'HIDDEN_LOADER'
const SHOW_ERROR = 'SHOW_ERROR'
const HIDDEN_ERROR = 'HIDDEN_ERROR'

const INITIAL_STATE = {
  loader: false,
  errorStatus: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true}
    case HIDDEN_LOADER:
      return { ...state, loader: false }
    case SHOW_ERROR:
      return { ...state, errorStatus: true }
    case HIDDEN_ERROR:
      return { ...state, errorStatus: false }
    default:
      return state
  }
}