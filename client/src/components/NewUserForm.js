import React from 'react';

const NewUserForm = ({ 
  handleSubmit,
  handleFirstNameUpdate,
  handleLastNameUpdate,
  handleEmailUpdate,
  handleUsernameUpdate,
  handlePasswordUpdate
}) => (
  <div>
  <h2 className='home-message'> Sign Up for simstox </h2>
    <form className="login-form col s12" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" onChange={handleFirstNameUpdate} placeholder="First Name" />
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" onChange={handleLastNameUpdate} placeholder="Last Name" />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="text" className="validate" onChange={handleEmailUpdate} placeholder="Email" />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="username" type="text" className="validate" onChange={handleUsernameUpdate} placeholder="Username" />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" onChange={handlePasswordUpdate} placeholder="Password" />
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

export default NewUserForm;