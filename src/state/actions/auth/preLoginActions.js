import axios from 'axios'
import { URL, params } from '../config-request-api'

export const getUser = (email) => {
  return(dispatch) => {
    return axios.get(`${URL}/users/${email}`, 
    {
      params: params
    })
    .then(response => {
      const { data } = response
      
      dispatch({type: 'GET_USER', payload: {
        data: response.data,
        email: email
      }})
      
      return data
      
     }).catch( error => {
       return error.response
     })
     
  }
}

export const clearState = () => {
  return(dispatch) => {
    dispatch({type: 'CLEAR_STATE'})
  }
}