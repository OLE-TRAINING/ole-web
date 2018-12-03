const GET_GENRES = 'GET_GENRES'
const CHANGE_GENRE = 'CHANGE_GENRE'
const RESET_PAGE = 'RESET_PAGE'
const SET_PAGE = 'SET_PAGE'
const SEARCH = 'SEARCH'

const INITIAL_STATE = {
  genres: [],
  idGenre: '-1',
  page: 0,
  search: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_GENRES:
      return { ...state, genres: action.payload }
    case CHANGE_GENRE:
      return { ...state, idGenre: action.payload }
    case RESET_PAGE:
      return { ...state, page: 1 }
    case SET_PAGE:
      return { ...state, page: action.payload }
    case SEARCH:
      return { ...state, search: action.payload }
    default:
      return state
  }
}