import axios from 'axios'
import { URL, params } from '../config-request-api'

export const loginService = (email, password) => {
  const body = {
    "email": email.toLowerCase(),
    "password": password
  }

  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.post(`${URL}/users/validate${params}`, body)
    .then(response => {
      sessionStorage.setItem('token', response.headers['x-access-token'])
      dispatch({type: 'HIDDEN_LOADER'})
      dispatch({type: 'CHANGE_GENRE', payload: -1 })
      return response
    })
    .catch(error => {
      dispatch({type: 'HIDDEN_LOADER'})
      return error.response
    })
  }
}

export const getInfo = (username, email) => {
  const body = {
    "username": username,
    "email": email.toLowerCase()
  }

  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.post(`${URL}/users/confirm-data${params}`, body)
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

export const setPwd = (email, token, password, passwordConfirm) => {
  const body = {
    "email": email.toLowerCase(),
    "confirmationToken": token,
    "newPassword": password,
    "newPasswordConfirmation": passwordConfirm
  }

  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.put(`${URL}/users/password${params}`, body)
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