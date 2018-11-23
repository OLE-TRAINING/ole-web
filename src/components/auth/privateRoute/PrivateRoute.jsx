import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, keyL, value, ...rest }) => (
    <Route {...rest} render={props => (
        sessionStorage.getItem(keyL, value)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/prelogin'}} />
    )} />
)

