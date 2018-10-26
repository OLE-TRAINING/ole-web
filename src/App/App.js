import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'

import { PrivateRoute } from '../components/auth/privateRoute/PrivateRoute'
import  Home  from '../components/home/Home'
import  PreLogin  from '../components/auth/preLogin/PreLogin'
import  Login  from '../components/auth/login/Login'
import  Register  from '../components/auth/register/Register'
import  Token  from '../components/auth/token/Token'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} keyL="user" value="true"/>
          <div className="container">
            <Route path="/prelogin" component={PreLogin} />
            <PrivateRoute path="/login" component={Login} keyL="login" value="true"/>
            <PrivateRoute path="/register" component={Register} keyL="register" value="true"/>
            <PrivateRoute path="/token" component={Token} keyL="token" value="true"/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
