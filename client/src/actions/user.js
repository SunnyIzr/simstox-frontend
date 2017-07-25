import Api from '../api.js'
import Session from '../session/session'

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

export let fetchUserIfNeeded = (dispatch) => {
  if (Session.isLoggedIn()){
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
        Session.login(JSON.parse(body).token)
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
    Session.logout()
  }
}

