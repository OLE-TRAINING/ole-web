import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Promotional from '../promotional/Promotional'
import Cards from '../cards/Cards'

import { getMovies } from '../../state/actions/home/homeActions'
import { resetSearch } from '../../state/actions/header/headerActions'

import './home.css'

class Home extends Component {

  componentWillMount() {
    const { idGenre, getMovies, resetSearch } = this.props
    resetSearch()
    getMovies(idGenre, 1, 'genres', 20, true)
  }

  render() {

    return (
      <div className="home-content">
        {!this.props.search && ( 
          <div>
            <Promotional/>
          </div>
        )}
        <Cards flag={'genres'}/>
        {this.props.movies.length === 0 && (
          <div className="film-not-found">
            <i className="fa fa-frown-o sad-ajust fa-5x" aria-hidden="true"></i>
            <span>Não há mais filmes para serem exibidos</span>
          </div>  
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  page: state.genres.page, 
  idGenre: state.genres.idGenre,
  search: state.genres.search,
  movies: state.movies.films.results
})
const mapDispatchToProps = (dispatch) => ({ 
  getMovies: bindActionCreators(getMovies, dispatch),
  resetSearch: bindActionCreators(resetSearch, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)