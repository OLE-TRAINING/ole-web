import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }

    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    localStorage.removeItem('register')
    localStorage.removeItem('token')
    localStorage.removeItem('login')
  }

  logout() {
    this.setState({ redirect: true })
  }

  render() {
    return (
      <div >
        {this.state.redirect === true && (
          <Redirect  to="/prelogin" />
        )}
        <p>Home</p>
        <button onClick={this.logout}>logout</button>           
      </div>
    )
  }
}

export default Home