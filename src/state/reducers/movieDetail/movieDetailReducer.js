const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
const SET_MOVIE_ID = 'SET_MOVIE_ID'

const INITIAL_STATE = {
  movieDetail: [],
  searchId: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_MOVIE_DETAIL:
      return { ...state, movieDetail: action.payload}
    case SET_MOVIE_ID:
    return { ...state, searchId: action.payload}
    default:
      return state
  }
}