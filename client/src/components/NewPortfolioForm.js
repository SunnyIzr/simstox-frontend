import React from 'react';

const NewPortfolioForm = ({ 
  handleSubmit,
  handleNameUpdate,
  goBack
}) => (
  <div>
  <h2 className='home-message'> Create a New Portfolio </h2>
    <form className="trade-form col s12" onSubmit={handleSubmit}>
    <div className='row'>
      <a href='#Back' onClick={goBack} className='right close-btn'><i className="material-icons dp48">close</i><span></span></a>
    </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="name" type="text" className="validate" onChange={handleNameUpdate} placeholder="Name" />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button className="btn waves-effect waves-light login-btn" type="submit" name="action">Create
          </button>
        </div>
      </div>
    </form>
  </div>
)

export default NewPortfolioForm;