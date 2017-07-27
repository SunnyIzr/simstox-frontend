import React from 'react';

const NewPortfolioForm = ({ 
  handleSubmit,
  handleNameUpdate
}) => (
  <div>
  <h2 className='home-message'> Create a New Portfolio </h2>
    <form className="login-form col s12" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input id="name" type="text" className="validate" onChange={handleNameUpdate} placeholder="Name" />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button className="btn waves-effect waves-light login-btn" type="submit" name="action">Sign Up
          </button>
        </div>
      </div>
    </form>
  </div>
)

export default NewPortfolioForm;