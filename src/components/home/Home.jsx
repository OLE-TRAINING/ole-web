import React, { Component } from 'react';


import Header from '../header/Header'
import Promotional from '../promotional/Promotional'
import Cards from '../cards/Cards'

import './home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-content">          
        <Header />
        <Promotional />
        <Cards />
      </div>
    )
  }
}

export default Home