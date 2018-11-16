import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'

import { PrivateRoute } from '../components/auth/privateRoute/PrivateRoute'
import PreLogin  from '../components/auth/preLogin/PreLogin'
import Login  from '../components/auth/login/Login'
import Register  from '../components/auth/register/Register'
import Token  from '../components/auth/token/Token'

import { PacmanLoader } from 'react-spinners';
import ErrorMsg from '../components/global/errorMsg/ErrorMsg'

import './app.css'
import Main from '../components/main/main';

class App extends Component {
  render() {
    const { app } = this.props
    return (
      <div>
      { app.loader && 
        <div className="loader-content">
          <PacmanLoader size={20} color="#fff" />
        </div>
      }
      <Router>
        <div>
          { app.status && 
            <div className="loader-content">
              <ErrorMsg  />
            </div>
          }
          <PrivateRoute exact path="/" component={Main} keyL="user" value="true"/>
          <Route exact path="/prelogin" component={PreLogin} />
          <PrivateRoute path="/login" component={Login} keyL="login" value="true"/>
          <PrivateRoute path="/register" component={Register} keyL="register" value="true"/>
          <PrivateRoute path="/token" component={Token} keyL="token" value="true"/>
        </div>
      </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ app: state.app})
export default connect(mapStateToProps, null)(App)
