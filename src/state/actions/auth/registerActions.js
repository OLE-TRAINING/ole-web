import axios from 'axios'

const URL = 'https://ole.dev.gateway.zup.me/client-training/v1'

export const getUser = () => {
  return(dispatch) => {
    return axios.get(`${URL}/users/`, 
    {
      params: {
        'gw-app-key': '593c3280aedd01364c73000d3ac06d76'
      }
    })
    .then(response => {
      const { data } = response
      
      dispatch({type: 'GET_USER', payload: data})
      
      return data
     })
  }
}
