export const hiddenErrorMsg = () => {
  return(dispatch) => {
    dispatch({type: 'HIDDEN_ERROR'})
  }
}
