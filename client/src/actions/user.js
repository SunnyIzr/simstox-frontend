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

export let loginUser = (credentials) => {
  return dispatch => {
    dispatch({
      type: 'REQUEST_USER'
    })
    return Api.login(credentials)
      .then(body => {
        sessionStorage.setItem('token', JSON.parse(body).token)
        dispatch({
          type: 'RECEIVE_USER',
          data: JSON.parse(body).user
        })
      })
  }
}

export let logoutUser = () => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_USER'
    })
    sessionStorage.clear()
  }
}

