import Api from '../api.js'

let fetchUser = () => {
  return dispatch => {
    dispatch({
      type: 'REQUEST_USER'
    })
    return Api.fetchUser()
      .then(body => {
        dispatch({
          type: 'RECEIVE_USER',
          data: JSON.parse(body)
        })
      })
  }
}

let shouldFetchUser = () => {
  return !!sessionStorage.token
}

export let fetchUserIfNeeded = (dispatch) => {
  if (shouldFetchUser()){
    return dispatch(fetchUser())
  }
}
