const GET_GENRES = 'GET_GENRES'
const CHANGE_GENRE = 'CHANGE_GENRE'

const INITIAL_STATE = {
  genres: [],
  idGenre: '-1'
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_GENRES:
      return { ...state, genres: action.payload }
    case CHANGE_GENRE:
    return { ...state, idGenre: action.payload }
    default:
      return state
  }
}