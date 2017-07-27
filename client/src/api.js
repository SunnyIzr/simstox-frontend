import Session from './session/session'
class Api{
  static fetchUser(){
    const url = 'http://simstox.herokuapp.com/user'
    const data = { 
      headers: {
        'Content-Type': 'application/json',
        "Authorization": Session.token()
      }
    }
    return fetch(url, data)
      .then( response => {
        return response.text()
      })
  }

  static login(credentials){
    const url = 'http://simstox.herokuapp.com/users/login'
    const data = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    }
    return fetch(url, data)
      .then( response => {
        return response.text()
      })
  }

  static signUp(userData){
    const url = 'http://simstox.herokuapp.com/users'
    const data = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userData)
    }
    return fetch(url, data)
      .then( response => {
        return response.text()
      })
  }

  static fetchPortfolio(id){
    const url='http://simstox.herokuapp.com/portfolios/' + id
    const data = { 
      headers: {
        'Content-Type': 'application/json',
        "Authorization": Session.token()
      }
    }
    return fetch(url, data)
      .then( (response) => {
        return response.text()
      })
  }

  static fetchPosition(portfolioId, stockId){
    const url = 'http://simstox.herokuapp.com/portfolios/' + portfolioId + "/stocks/" + stockId
    const data = { 
      headers: {
        'Content-Type': 'application/json',
        "Authorization": Session.token()
      }
    }
    return fetch(url, data)
      .then(response => {
        return response.text()
      })
  }

  static getPricing(ticker){
    const url = 'http://simstox.herokuapp.com/stocks/' + ticker + '/historical'
    const data = { 
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(url, data)
      .then(response => {
        return response.text()
      })
  }

  static createTrade(tradeData){
    const url = 'http://simstox.herokuapp.com/trades'
    const data = { 
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": Session.token()
        },
        body: JSON.stringify(tradeData)
      }

    return fetch(url, data)
      .then(response => {
        return response.text()
      })
  }

  static createPortfolio(portfolioData){
    const url = 'http://simstox.herokuapp.com/portfolios'
    const data = { 
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": Session.token()
        },
        body: JSON.stringify(portfolioData)
      }

    return fetch(url, data)
      .then(response => {
        return response.text()
      })
  }
}

export default Api