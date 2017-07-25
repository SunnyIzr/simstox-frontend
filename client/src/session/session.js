class Session{
  static login(token){
    sessionStorage.setItem('token', token)
  }

  static logout(){
    sessionStorage.clear()
  }

  static isLoggedIn(){
    return !!sessionStorage.token
  }

  static token(){
    return sessionStorage.token
  }
}

export default Session