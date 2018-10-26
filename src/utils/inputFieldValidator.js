const NAME = 'name'
const USERNAME = 'username'
const PASSWORD = 'password'

export const inputFieldValidator = (data, rule) => {
  switch(rule) {
    case NAME:
      if(data.match(/^[a-záàâãéèêíïóôõöúçñ ]{1,50}$/i)) {
        return true
      } else { 
        return false 
      }
    case USERNAME:
      if(data.match(/^([a-zA-z0-9]){1,15}$/)) {
        return true
      } else { 
        return false 
      }
    case PASSWORD:
      if(data.match(/^(?=.*[0-9])(?=.*[a-zA-Z])\w{6,10}$/)) {
        return true
      } else { 
        return false 
      }
    default:
      return false
  }

}