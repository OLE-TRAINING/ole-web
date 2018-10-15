const SEARCHED = 'SEARCHED'

const INITIAL_STATE = {
  user: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SEARCHED:
      return { ...state, list: action.payload } 
    default:
      return state
  }
}