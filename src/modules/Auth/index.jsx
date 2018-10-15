import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './auth.css'

import Token from 'modules/Auth/Token'
import Login from 'modules/Auth/Login'
import PreLogin from 'modules/Auth/PreLogin'
import Register from 'modules/Auth/Register'

class Auth extends Component {

  render() {
    return (
      <div className="center">
        <div className="content">
          <>
            <Route exact path="/auth/pre-login" component={PreLogin} />
            <Route exact path="/auth/token" component={Token} />
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
          </>
        </div>
      </div>
    )
  }

}

export default Auth
