import axios from 'axios'
import { URL, params, headers } from '../config-request-api'


export const getMovies = (id, page) => {
  return(dispatch) => {
    return axios.get(`${URL}/genres/${id}/movies${params}&page=${page}&amount=20`, 
    {
      headers: headers()
    })
    .then(response => {
      sessionStorage.setItem('token', response.headers['x-access-token'])
      dispatch({type: 'GET_MOVIES', payload: response.data })
      
    })
    .catch( error => {
      dispatch({type: 'SHOW_ERROR', payload: error.response})
    }) 
  }
}

