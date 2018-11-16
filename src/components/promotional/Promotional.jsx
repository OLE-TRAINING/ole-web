import React, { Component } from 'react'
import Truncate from 'react-truncate'
import { connect } from 'react-redux'

import './promotional.css'

class Promotional extends Component { 

  renderPromotional() {
    const { movies } = this.props
    if (movies.results && movies.results.length > 0) {
      var movie = movies.results[0]
      console.log(movie)
    }
    return (
    <div className="promo-content">
      <img className="promo-img" src={'img'} alt="terra"/>
      <div className="promo-img-info">
        <div className="promo-title-like">
          <div className="promo-title-content">
            <span className="promo-title">{ '' }</span>
            <span className="promo-infos"> { 'movies.results[0].genreNames' }  | Duração: { 'movies.results[0].runtime' } | { 'movies.results[0].year' }</span>
            <div className="promo-synopsis">
              <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
                { 'movies.results[0].overview' } 
              </Truncate>
            </div>
          </div>
          <div className="promo-like">
            <i className="fa fa-heart outline-white fa-3x"></i>
          </div>
        </div>
        <div className="promo-price-rating">
          <div className="promo-price">
            R$ { 'movies.results[0].price' }
          </div>
          <div className="promo-rating">
            <div className="rating-1">
              <span className="promo-score">Nota</span>
              <span className="promo-info"> baseada em 3.546 avaliações</span>
            </div>
            <div className="rating-1">
              <div>
                <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o fa-2x star" aria-hidden="true"></i>
                <i className="fa fa-star-o fa-2x star" aria-hidden="true"></i>
              </div>
              <span className="promo-score2">{ 'movies.results[0].voteAverage' }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  render() {
    return (
      this.renderPromotional()
    )
  }
}

const mapStateToProps = state => ({ movies: state.movies.films})
export default connect(mapStateToProps, null)(Promotional)