import React, { Component } from 'react'
import Header from '../../components/header/Header'
import { Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'

class Main extends Component {

  componentWillMount() {
    sessionStorage.removeItem('login')
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}

export default Main