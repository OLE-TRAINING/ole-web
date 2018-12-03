const GET_MOVIES = 'GET_MOVIES'
const CLEAR_MOVIES = 'CLEAR_MOVIES'

const INITIAL_STATE = {
  films: {
    totalMovies: 0,
    totalPages: 0,
    page: 0,
    results: []
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_MOVIES:
      if(action.payload.page !== 1){
        return { ...state, 
          films: {
            totalMovies: action.payload.totalMovies,
            totalPages: action.payload.totalPages,
            page: action.payload.page,
            results: [...state.films.results.concat(action.payload.results)]
          }
        }
      }
      return { ...state, 
        films: {
          totalMovies: action.payload.totalMovies,
          totalPages: action.payload.totalPages,
          page: 1,
          results: action.payload.results
        }
      }
    case CLEAR_MOVIES:
      return { ...state, films: [] }
    default:
      return state
  }
}