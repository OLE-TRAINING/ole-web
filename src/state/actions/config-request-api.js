
export const URL = 'https://ole.dev.gateway.zup.me/client-training/v1'
export const params = '?gw-app-key=593c3280aedd01364c73000d3ac06d76'


export const headers = () => {
  return {
    'Authorization': `Bearer ${sessionStorage.getItem('token')}` ,
  }
}