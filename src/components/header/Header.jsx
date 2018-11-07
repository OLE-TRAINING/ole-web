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
        <div className="header-title">
          <b>OT</b>MOVIES
        </div>
        <nav>
          <ul>
            <li><a href="/" className="active">Lançamentos</a></li>
            <li><a href="/">Ação</a></li>
            <li><a href="/">Aventura</a></li>
            <li><a href="/">Comédia</a></li>
            <li><a href="/">Gêneros <i className="fa fa-angle-down"></i></a></li>
          </ul>
        </nav>
        <i className="fa fa-search search-content"></i>
        <div className="profile-settings" onClick={this.logout}>
          <span>Robson90</span>
          <i className="fa fa-angle-down"></i>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg" alt="avatar" className="img-logo"></img>
      </div>
    )
  }
}

export default Header