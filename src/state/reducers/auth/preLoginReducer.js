const GET_USER = 'GET_USER'
const CLEAR_STATE = 'CLEAR_STATE'

const INITIAL_STATE = {
  user: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USER:
      return { ...state, user: action.payload}
    case CLEAR_STATE:
      return { ...state, user: [] }
    default:
      return state
  }
}