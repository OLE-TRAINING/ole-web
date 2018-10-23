const SAVE_USER = 'GET_USER'

const INITIAL_STATE = {
  user: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload}
    default:
      return state
  }
}