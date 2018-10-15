import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from './modules/Main'
import Auth from './modules/Auth'

import './index.css'

const fakeAuth = () => localStorage.getItem('token')

//middlewares #######################################################
/*
Promise para chamadas assincronas ao back-end
Multi para multiplas actions dentro da actionCreate
Thunk em vez de retornar uma action, executa um metodo
*/
//###################################################################
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import Routes from './routes'
import reducers from './reducers'

const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() =>
          fakeAuth() ? (<Main />) : (<Redirect to="/auth/pre-login" />)}/>
        <Route path="/auth" component={Auth} />
        <Redirect from="*" to="/auth/pre-login"/>
      </Switch>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
)
