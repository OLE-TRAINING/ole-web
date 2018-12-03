import axios from 'axios'
import { URL, params, headers } from '../config-request-api'

import { getMovies } from '../home/homeActions'

export const getMovieDetail = (id) => {
  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.get(`${URL}/movies/${id}/detail${params}`, 
    {
      headers: headers()
    })
    .then(response => {
      sessionStorage.setItem('token', response.headers['x-access-token'])
      dispatch({type: 'GET_MOVIE_DETAIL', payload: response.data })
      dispatch({type: 'HIDDEN_LOADER'})
    })
    .catch( error => {
      dispatch({type: 'HIDDEN_LOADER'})
      if(error.response){
        dispatch({type: 'SHOW_ERROR', payload: error.response.status})
      } else {
        dispatch({type: 'SHOW_ERROR', payload: 500})
      }
    })  
  }
}

export const setSearchId = (id) => {
  return(dispatch) => 
  {
  dispatch({type: 'SEARCH', payload: false })
  dispatch({type: 'SET_MOVIE_ID', payload: id })
  dispatch(getMovieDetail(id))
  dispatch(getMovies(id, 1, 'similarity', 20, true))
  }
}
