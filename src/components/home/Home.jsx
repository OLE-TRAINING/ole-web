import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Promotional from '../promotional/Promotional'
import Cards from '../cards/Cards'

import { getMovies } from '../../state/actions/home/homeActions'

import './home.css'

class Home extends Component {

  componentDidMount() {
    // const { getMovies, idGenres } = this.props
    this.props.getMovies(3)
  }

  render() {
    return (
      <div className="home-content">          
        <Promotional movies={'dsd'}/>
        <Cards />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({ 
  getMovies: bindActionCreators(getMovies, dispatch)
})
export default connect(null, mapDispatchToProps)(Home)