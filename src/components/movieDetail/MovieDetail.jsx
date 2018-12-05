import React, { Component } from 'react'
import { connect } from 'react-redux'
import './movieDetail.css'
import Img from 'react-image'
import { ScaleLoader} from 'react-spinners'

class MovieDetail extends Component { 

  renderMovieDetail() {     
    const film = this.props.movie || []
    
    return (
    <div className="moviedetail-content">
        {film.bannerId
        ? <Img className="moviedetail-banner"
            src={`https://ole.dev.gateway.zup.me/client-training/v1/movies/${film.bannerId}/image/original?gw-app-key=593c3280aedd01364c73000d3ac06d76`}
            loader=
            {<div className="loader-moviedetail-img">
              <ScaleLoader color="#000"/>
              <span>LOADING</span>
            </div>}
          />  
        : <div className="moviedetail-banner">
            <p>No image</p>
          </div>
      }
      <div className="moviedetail-img-info">
        {film.posterId         
          ? <Img className="moviedetail-poster"
              src={`https://ole.dev.gateway.zup.me/client-training/v1/movies/${film.posterId}/image/w500?gw-app-key=593c3280aedd01364c73000d3ac06d76`}
              loader=
              {<div className="moviedetail-poster">
                <ScaleLoader color="#fff"/>
              </div>
              }
            />            
          : <div className="moviedetail-poster">
              No image
            </div>
        }
        
        <div className="moviedetail-title-like">
          <div className="moviedetail-title-content">
            <span className="moviedetail-title">{ film.title }</span>
            <span className="moviedetail-infos"> {film.genreNames ? film.genreNames.join(): '' }</span>
            <span className="moviedetail-infos">
              <span className="bullet">
                Duração: { film.runtime }</span> | { film.year } | { film.countries ? film.countries.join() : '' }
              </span>
            <div className="moviedetail-synopsis">      
              { film.overview } 
            </div>
          </div>
          <div className="moviedetail-like">
            {film.favorit 
              ? <i className="fa fa-heart outline-white fa-3x"></i>
              : <i className="fa fa-heart-o outline-white fa-3x"></i>
            }
          </div>
        </div>
        <div className="moviedetail-price-rating-info">
          <div className="player-button">
            <img alt='player' width="35" height="35" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIwOS42NzMgMjA5LjY3MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjA5LjY3MyAyMDkuNjczOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPHBhdGggZD0iTTE3My4wNzUsMjkuMjAzSDM2LjU5OUMxNi40MTgsMjkuMjAzLDAsNDUuNjI2LDAsNjUuODEydjc4LjA1YzAsMjAuMTg2LDE2LjQxOCwzNi42MDgsMzYuNTk5LDM2LjYwOGgxMzYuNDc3ICAgYzIwLjE4LDAsMzYuNTk4LTE2LjQyMiwzNi41OTgtMzYuNjA4di03OC4wNUMyMDkuNjczLDQ1LjYyNiwxOTMuMjU1LDI5LjIwMywxNzMuMDc1LDI5LjIwM3ogTTE5NC42NzMsMTQzLjg2MSAgIGMwLDExLjkxNS05LjY4OSwyMS42MDgtMjEuNTk4LDIxLjYwOEgzNi41OTljLTExLjkxLDAtMjEuNTk5LTkuNjkzLTIxLjU5OS0yMS42MDh2LTc4LjA1YzAtMTEuOTE1LDkuNjg5LTIxLjYwOCwyMS41OTktMjEuNjA4ICAgaDEzNi40NzdjMTEuOTA5LDAsMjEuNTk4LDkuNjkzLDIxLjU5OCwyMS42MDhWMTQzLjg2MXoiIGZpbGw9IiNmN2Y5ZmEiLz4KCTxwYXRoIGQ9Ik0xNDUuMDk1LDk4LjU3TDg5LjQ5OSw2MS45MmMtMi4zMDMtMS41MTktNS4yNTQtMS42NDktNy42ODQtMC4zNDJjLTIuNDI5LDEuMzA4LTMuOTQ0LDMuODQ1LTMuOTQ0LDYuNjA0djczLjMwOSAgIGMwLDIuNzU5LDEuNTE1LDUuMjk1LDMuOTQ0LDYuNjA0YzEuMTEzLDAuNiwyLjMzNiwwLjg5NiwzLjU1NSwwLjg5NmMxLjQ0MiwwLDIuODgxLTAuNDE1LDQuMTI5LTEuMjM5bDU1LjU5Ni0zNi42NTkgICBjMi4xMDUtMS4zODgsMy4zNzItMy43NCwzLjM3Mi02LjI2MkMxNDguNDY3LDEwMi4zMSwxNDcuMiw5OS45NTgsMTQ1LjA5NSw5OC41N3ogTTkyLjg3MSwxMjcuNTYyVjgyLjEwOWwzNC40NzEsMjIuNzIzICAgTDkyLjg3MSwxMjcuNTYyeiIgZmlsbD0iI2Y3ZjlmYSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
            </div>
          <div className="moviedetail-price-rating">
            { film.acquired 
              ? <img alt="clap" width="40" height="40" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
              : <div className="moviedetail-price">
                    { film.price ? new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(film.price) : ''}
                </div>
            }
            <div className="moviedetail-rating">
              <div className="rating-1">
                <span className="moviedetail-score">Nota</span>
                <span className="moviedetail-info"> baseada em {film.voteCount} avaliações</span>
              </div>
              <div className="rating-1">
                <div>
                  <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                  <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                  <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o fa-2x star" aria-hidden="true"></i>
                  <i className="fa fa-star-o fa-2x star" aria-hidden="true"></i>
                </div>
                <span className="moviedetail-score2">{ film.voteAverage }</span>
              </div>
            </div>
          </div>
          <div className="creators-info">
            <div className="director-info">
              <span className="create-info">Diretor:</span><span className="creators-ajust">{film.directors ? film.directors.join() : ''}</span>
            </div>
            <div className="director-info">
              <span className="create-info">Escritor:</span><span className="creators-ajust">{film.writers ?  film.writers.join() : ''}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  render() { 
    return (
      this.renderMovieDetail()
    )
  }
}

const mapStateToProps = state => ({ movie: state.movieDetail.movieDetail})
export default connect(mapStateToProps, null)(MovieDetail)