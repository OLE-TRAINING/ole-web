import axios from 'axios'
import { URL, params } from '../config-request-api'

export const loginService = (email, password) => {
  const body = {
    "email": email,
    "password": password
  }

  return() => {
    return axios.post(`${URL}/users/validate`, body,
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