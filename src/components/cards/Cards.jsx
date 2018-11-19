import React, { Component } from 'react'
import Truncate from 'react-truncate'
import { connect } from 'react-redux'

import './cards.css'

class Cards extends Component {
  
  renderCards() {
    
      return(
        <div className="card-content" >
        <div className="card-img-box">
          <img className="card-image" alt="img-film"></img>
          <div className="card-img-info">
            <span className="film-year">{}</span>
            <span className="film-rating"><p>{}</p></span>
          </div>
        </div>
        <div className="card-body">
          <div className="card-header">
            <div className="card-header-title">
              <span className="film-title">{}</span>
              <span className="film-genre">{}</span>
              <span className="film-duration"></span>
            </div>
            <div className="film-like">
              {}
            </div>
          </div>
          <div className="film-synopsis">
            <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
              {}
            </Truncate>
          </div>
          <div className="film-view">

          </div>
        </div>
      </div> 
      )
    
  }

  render() {
    return (
      <div className="card-component">
        {this.renderCards()}
      </div>  
    )
  }
}

const mapStateToProps = state => ({ movies: state.movies.films.results})
export default connect(mapStateToProps, null)(Cards)