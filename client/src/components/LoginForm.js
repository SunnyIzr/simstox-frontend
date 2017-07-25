import React, { Component } from 'react';

const LoginForm = ({ 
  handleSubmit,
  handleUsernameUpdate,
  handlePasswordUpdate
}) => (
  <form className="login-form col s12" onSubmit={handleSubmit}>
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
        <button className="btn waves-effect waves-light login-btn" type="submit" name="action">Login
        </button>
      </div>
    </div>
  </form>
)

export default LoginForm;