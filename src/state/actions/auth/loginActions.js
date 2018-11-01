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

export const getInfo = (username, email) => {
  const body = {
    "username": username,
    "email": email
  }

  return() => {
    return axios.post(`${URL}/users/confirm-data`, body,
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

export const setPwd = (email, token, password, passwordConfirm) => {
  const body = {
    "email": email,
    "confirmationToken": token,
    "newPassword": password,
    "newPasswordConfirmation": passwordConfirm
  }

  return() => {
    return axios.put(`${URL}/users/password`, body,
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