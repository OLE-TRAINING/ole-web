import axios from 'axios'
import { URL, params } from '../config-request-api'

export const createUser = (email, name, userName, password) => {
  const body = {
    "email": email.toLowerCase(),
    "password": password,
    "completeName":name,
    "username": userName
  }
  
  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.post(`${URL}/users`, body, 
    {
      params: params
    })
    .then(response => {
      dispatch({type: 'HIDDEN_LOADER'})
      return response
    })
    .catch(error => {
      dispatch({type: 'HIDDEN_LOADER'})
      return error.response
    })
  }
}
