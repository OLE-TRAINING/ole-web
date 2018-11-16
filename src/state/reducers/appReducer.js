const SHOW_LOADER = 'SHOW_LOADER'
const HIDDEN_LOADER = 'HIDDEN_LOADER'
const SHOW_ERROR = 'SHOW_ERROR'
const HIDDEN_ERROR = 'HIDDEN_ERROR'

const INITIAL_STATE = {
  loader: false,
  errorMsg: {
    status: false,
    msg: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true}
    case HIDDEN_LOADER:
      return { ...state, loader: false }
    case SHOW_ERROR:
      return { ...state.errorMsg, status: true, msg: action.msg }
    case HIDDEN_ERROR:
      return { ...state.errorMsg, status: false }
    default:
      return state
  }
}