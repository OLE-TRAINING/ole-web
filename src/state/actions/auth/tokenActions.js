import axios from 'axios'
import { URL, params } from '../config-request-api'

export const tokenValidator = (email, token) => {
  const body = {
    "email": email,
    "token": token
  }

  return() => {
    return axios.post(`${URL}/users/${email}/register/${token}`, body,
    {
      params: params
    })
    .then(response => {
      return response
     })
     .catch(error => {
       console.error(error)
       return error.response
     })
  }
}

export const resendToken = (email) => {
  const body = {
    "email": email,
  }
  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.put(`${URL}/tokens/${email}`, body,
    {
      params: params
    })
    .then(response => {
      const { status } = response
      dispatch({type: 'HIDDEN_LOADER'})
      return status
     })
     .catch(error => {
       console.error(error)
       return error.response
     })
  }
}