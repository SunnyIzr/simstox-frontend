import Session from './session/session'
class Api{
  static fetchUser(){
    const url = 'http://localhost:3001/user'
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
    const url = 'http://localhost:3001/users/login'
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

  static fetchPortfolio(id){
    const url='http://localhost:3001/portfolios/' + id
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
    const url = 'http://localhost:3001/portfolios/' + portfolioId + "/stocks/" + stockId
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
    const url = 'http://localhost:3001/stocks/' + ticker + '/historical'
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
    const url = 'http://localhost:3001/trades'
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
}

export default Api