import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Promotional from '../promotional/Promotional'
import Cards from '../cards/Cards'

import { getMovies } from '../../state/actions/home/homeActions'

import './home.css'

class Home extends Component {

  componentWillMount() {
    // const { getMovies, idGenres } = this.props
    this.props.getMovies(-1, 1)
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