import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'

import { PrivateRoute } from '../components/auth/privateRoute/PrivateRoute'
import  Home  from '../components/home/Home'
import  PreLogin  from '../components/auth/preLogin/PreLogin'
import  Login  from '../components/auth/login/Login'
import  Register  from '../components/auth/register/Register'
import  Token  from '../components/auth/token/Token'
import { HashLoader } from 'react-spinners';

class App extends Component {
  render() {
    const { loading } = this.props
    return (
      <div>
      { loading && <HashLoader/>}
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} keyL="user" value="true"/>
          <Route path="/prelogin" component={PreLogin} />
          <PrivateRoute path="/login" component={Login} keyL="login" value="true"/>
          <PrivateRoute path="/register" component={Register} keyL="register" value="true"/>
          <PrivateRoute path="/token" component={Token} keyL="token" value="true"/>
        </div>
      </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ loading: state.loader.loader})
export default connect(mapStateToProps, null)(App)
