import axios from 'axios'
import { URL, params } from '../config-request-api'

export const createUser = (email, name, userName, password) => {
  const body = {
    "email": email,
    "password": password,
    "completeName":name,
    "username": userName
  }
  
  return() => {
    return axios.post(`${URL}/users`, body, 
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
