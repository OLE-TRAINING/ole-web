import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import './home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }

    this.logout = this.logout.bind(this)
  }

  componentDidMount() {

  }

  logout() {
    this.setState({ redirect: true })
  }

  render() {
    return (
      <div className="home-content">          
        {this.state.redirect === true && (
          <Redirect  to="/prelogin" />
        )}
        <div className="header-content">
          <p>Logo</p>
          <p>Header</p>
          <button onClick={this.logout}>logout</button>
        </div>
        <div className="promo-content"><p>Promo</p></div>
        <div className="card-component">
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
          <p className="card">Card</p>
        </div>          
      </div>
    )
  }
}

export default Home