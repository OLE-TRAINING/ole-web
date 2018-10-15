import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Dashboard from 'modules/Dashboard'

class Main extends Component {

  render() {
    return (
      <div>
        <div>Main header</div>
        <div>
          <Route path="/" component={Dashboard} />
        </div>
      </div>
    )
  }

}

export default Main
