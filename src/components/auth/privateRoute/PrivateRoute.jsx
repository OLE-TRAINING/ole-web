import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, keyL, value, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem(keyL, value)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/prelogin', state: { from: props.location } }} />
    )} />
)

