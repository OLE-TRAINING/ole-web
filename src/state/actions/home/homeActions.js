import axios from 'axios'
import { URL, params, headers } from '../config-request-api'


export const getMovies = (id, page, type, amount, load) => {
  return(dispatch) => {
    if(load) {
      dispatch({type: 'SHOW_LOADER'})
    }
    return axios.get(`${URL}/movies${params}&filter=${type}&page=${page}&amount=${amount}&filter_id=${id}`, 
    {
      headers: headers()
    })
    .then(response => {
      sessionStorage.setItem('token', response.headers['x-access-token'])
      dispatch({type: 'GET_MOVIES', payload: response.data })
      dispatch({type: 'SET_PAGE', payload: response.data.page })
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

