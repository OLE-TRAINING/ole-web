import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'

import PreLogin  from '../components/auth/preLogin/PreLogin'
import Login  from '../components/auth/login/Login'
import Register  from '../components/auth/register/Register'
import Token  from '../components/auth/token/Token'

import { PacmanLoader } from 'react-spinners'
import ErrorMsg from '../components/global/errorMsg/ErrorMsg'

import './app.css'
import Main from '../components/main/main'

const fakeAuth = (flag) => sessionStorage.getItem(flag)

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
          { app.errorStatus && 
            <div className="loader-content">
              <ErrorMsg  />
            </div>
          }
        <Switch>
          <Route exact path="/prelogin" component={PreLogin} />
          <Route exact path="/login" render={(props) =>
            fakeAuth('login') ? (<Login {...props}/>) : (<Redirect to="/prelogin" />)}/>
          <Route exact path="/token" render={(props) =>
            fakeAuth('token') ? (<Token {...props}/>) : (<Redirect to="/prelogin" />)}/>
          <Route exact path="/register" render={(props) =>
            fakeAuth('register') ? (<Register {...props}/>) : (<Redirect to="/prelogin" />)}/> 
          <Route path="/" render={(props) =>
            fakeAuth('main') ? (<Main {...props}/>) : (<Redirect to="/prelogin" />)}/>
        </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ app: state.app })
export default connect(mapStateToProps, null )(App)
