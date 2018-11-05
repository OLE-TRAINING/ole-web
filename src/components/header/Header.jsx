import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.setState({ redirect: true })
  }

  render() {
    return(
      <div className="header-content">
        {this.state.redirect === true && (
          <Redirect  to="/prelogin" />
        )}
        <p>Logo</p>
        <p>Header</p>
        <button onClick={this.logout}>logout</button>
      </div>
    )
  }
}

export default Header