import axios from 'axios'
import { URL, params } from '../config-request-api'

import { getUser } from '../auth/preLoginActions'

export const tokenValidator = (email, token) => {
  const body = {
    "email": email,
    "token": token
  }

  return(dispatch) => {
    return axios.post(`${URL}/users/${email}/register/${token}${params}`, body)
    .then(response => {
      dispatch(getUser(email))
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
    "email": email.toLowerCase(),
  }
  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'}) 
    return axios.put(`${URL}/tokens/${email.toLowerCase()}${params}`, body)
    .then(response => {
      const { status } = response
      dispatch({type: 'HIDDEN_LOADER'})
      return status
    })
    .catch(error => {
      dispatch({type: 'HIDDEN_LOADER'})
      return error.response
    })
  }
}