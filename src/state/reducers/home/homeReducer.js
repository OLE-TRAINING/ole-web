const GET_MOVIES = 'GET_MOVIES'

const INITIAL_STATE = {
  films: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_MOVIES:
      return { ...state, films: action.payload}
    default:
      return state
  }
}