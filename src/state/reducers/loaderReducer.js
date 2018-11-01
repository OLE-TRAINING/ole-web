const SHOW_LOADER = 'SHOW_LOADER'
const HIDDEN_LOADER = 'HIDDEN_LOADER'

const INITIAL_STATE = {
  loader: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true}
    case HIDDEN_LOADER:
      return { ...state, loader: false }
    default:
      return state
  }
}