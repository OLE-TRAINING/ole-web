import axios from 'axios'
import { URL, params, headers } from '../config-request-api'

export const getGenres = () => {
  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.get(`${URL}/genres${params}`, 
    {
      headers: headers()
    })
    .then(response => {
      localStorage.setItem('token', response.headers['x-access-token'])
      dispatch({type: 'HIDDEN_LOADER'})
      dispatch({type: 'GET_GENRES', payload: response.data })
    })
    .catch( error => {
      dispatch({type: 'HIDDEN_LOADER'})
      dispatch({type: 'SHOW_ERROR', payload: error.response})
    }) 
  }
}

export const changeState = (id) => {
  return(dispatch) => {
    dispatch({type: 'CHANGE_GENRE', payload: id })
  }
}