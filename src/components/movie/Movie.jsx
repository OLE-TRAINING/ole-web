import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MovieDetail from '../movieDetail/MovieDetail'
import Cards from '../cards/Cards'

import { getMovieDetail } from '../../state/actions/movieDetail/movieDetailActions'
import { getMovies } from '../../state/actions/home/homeActions'
import { resetSearch } from '../../state/actions/header/headerActions'

import './movie.css'

class Movie extends Component {

  componentWillMount() {
    const { location, getMovieDetail, getMovies, idSearch, resetSearch } = this.props
    const idSearchFind = idSearch ? idSearch : location.search.substring(1, location.search.length)
    resetSearch()
    getMovieDetail(idSearchFind)
    getMovies(idSearchFind, 1, 'similarity', 20, true)
  }

  render() {
    const { search } = this.props.location
    let idSearch = search.substring(1, search.length)
    return (
      <div className="home-content">
        {!this.props.search && ( 
          <div>
            <MovieDetail/>
          </div>
        )}
        {this.props.movies.length !== 0 && (
          <Cards idSearch={idSearch} flag={'similarity'} />
        )}
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
  search: state.genres.search, 
  idSearch: state.movieDetail.searchId ,
  movies: state.movies.films.results
})
const mapDispatchToProps = (dispatch) => ({ 
  getMovieDetail: bindActionCreators(getMovieDetail, dispatch),
  getMovies: bindActionCreators(getMovies, dispatch),
  resetSearch: bindActionCreators(resetSearch, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Movie)