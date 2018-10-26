import axios from 'axios'
import { URL, params } from '../config-request-api'

export const tokenValidator = (email, token) => {
  const body = {
    "email": email,
    "token": token
  }

  return() => {
    return axios.post(`${URL}/tokens/${email}/${token}`, body,
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
  return() => {
    return axios.put(`${URL}/tokens/${email}`, body,
    {
      params: params
    })
    .then(response => {
      const { status } = response
      return status
     })
     .catch(error => {
       console.error(error)
       return error.response
     })
  }
}