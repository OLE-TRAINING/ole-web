import axios from 'axios'
import { URL, params, headers } from '../config-request-api'

import { getMovies } from '../home/homeActions'

export const getGenres = () => {
  return(dispatch) => {
    dispatch({type: 'SHOW_LOADER'})
    return axios.get(`${URL}/genres${params}`, 
    {
      headers: headers()
    })
    .then(response => {
      sessionStorage.setItem('token', response.headers['x-access-token'])
      dispatch({type: 'HIDDEN_LOADER'})
      dispatch({type: 'GET_GENRES', payload: response.data })
    })
    .catch( error => {
      dispatch({type: 'HIDDEN_LOADER'})
      if(error.response){
        dispatch({type: 'SHOW_ERROR', payload: error.response.status})
      } else {
        dispatch({type: 'SHOW_ERROR', payload: 500})
      }
    }) 
  }
}

export const changeState = (id) => {
    return(dispatch) => {
    dispatch({type: 'CHANGE_GENRE', payload: id })
    dispatch({type: 'SEARCH', payload: false })
    dispatch(getMovies(id, 1, 'genres', 20, true))
  }
} 

export const resetPage = () => {
  return(dispatch) => {
  dispatch({type: 'RESET_PAGE'})
  } 
}

export const logout = (email) => {
  return(dispatch) => {
    return axios.post(`${URL}/users/${email}/logout${params}`)
    
  }
} 

export const resetSearch = () => {
  return(dispatch) => {
    dispatch({type: 'SEARCH', payload: false })
  }
}

export const search = (value) => {
  return(dispatch) => {
    if(value.length === 0) {
      dispatch({type: 'SEARCH', payload: false })
      dispatch(getMovies(-1, 1, 'genres', 20, true))
    } else {
      dispatch({type: 'SEARCH', payload: true })
    }
  }
}

