import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from './modules/Main'
import Auth from './modules/Auth'

const fakeAuth = () => localStorage.getItem('token')

export default props => {

}