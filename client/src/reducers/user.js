const user = ( 
  state = {
    isFetching: false,
    data: {}
  }, 
  action 
) =>{
  switch (action.type){
    case 'REQUEST_USER':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    default:
      return state
  }
}

export default user;