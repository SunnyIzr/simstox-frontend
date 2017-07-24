import React, { Component } from 'react';
import '../styles/TradeForm.css'

class LoginForm extends Component {
  constructor(){
    super()
    this.state={
      ticker: '',
      quantity: 0,
      price: 0
    }
  }

  render(){
    return(
      <form className="trade-form col s12">
        <div className="row">
          <div className="col s12 l6">
            <p>Ticker</p>
            <h2>MSFT</h2>
          </div>
          <div className="col s12 l6">
            <p>Current Price</p>
            <h3>$35.88</h3>
          </div>
          <div className="input-field col s12 l6">
            <p>Quantity</p>
            <input id="quantity" type="number" className="qty-input" placeholder="Quantity" />
          </div>
          <div className="col s12 l6">
            <p>Total</p>
            <h3 className='trade-total'>$3,588.93</h3>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <button className="btn waves-effect waves-light trade-btn" type="submit" name="action">BUY
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default LoginForm;