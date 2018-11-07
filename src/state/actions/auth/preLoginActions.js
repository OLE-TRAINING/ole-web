import axios from 'axios'
import { URL, params } from '../config-request-api'

export const getUser = (email) => {
  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.get(`${URL}/users/${email.toLowerCase()}`, 
    {
      params: params
    })
    .then(response => {
      const { data } = response
      dispatch({type: 'HIDDEN_LOADER'})
      dispatch({type: 'GET_USER', payload: {
        data: response.data,
        email: email.toLowerCase()
      }})
      
      return data
      
     }).catch( error => {
      dispatch({type: 'HIDDEN_LOADER'})
       return error.response
     })
     
  }
}

export const clearState = () => {
  return(dispatch) => {
    dispatch({type: 'CLEAR_STATE'})
  }
}