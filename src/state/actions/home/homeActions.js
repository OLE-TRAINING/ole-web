import axios from 'axios'
import { URL, params, headers } from '../config-request-api'


export const getMovies = (id) => {
  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.get(`${URL}/genres/${id}/movies${params}`, 
    {
      headers: headers()
    })
    .then(response => {
      localStorage.setItem('token', response.headers['x-access-token'])
      dispatch({type: 'GET_MOVIES', payload: response.data })
      dispatch({type: 'HIDDEN_LOADER'})
    })
    .catch( error => {
      dispatch({type: 'HIDDEN_LOADER'})
      dispatch({type: 'SHOW_ERROR', payload: error.response})
    }) 
  }
}


