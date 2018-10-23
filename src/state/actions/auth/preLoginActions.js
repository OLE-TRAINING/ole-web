import axios from 'axios'

const URL = 'https://ole.dev.gateway.zup.me/client-training/v1'

export const getUser = (email) => {
  return(dispatch) => {
    return axios.get(`${URL}/users/${email}`, 
    {
      params: {
        'gw-app-key': '593c3280aedd01364c73000d3ac06d76'
      }
    })
    .then(response => {
      const { data } = response
      
      dispatch({type: 'GET_USER', payload: {
        data:data,
        email: email
      }})
      
      return data
     }).catch(function(error) {
       return error.response
     })
  }
}

export const clearState = () => {
  return(dispatch) => {
    dispatch({type: 'CLEAR_STATE'})
  }
}