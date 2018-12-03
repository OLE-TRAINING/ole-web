import React, { Component } from 'react'
import Truncate from 'react-truncate'
import { connect } from 'react-redux'
import './promotional.css'
import Img from 'react-image'
import { ScaleLoader} from 'react-spinners'

class Promotional extends Component { 

  renderPromotional() { 
    const movie = this.props.movies || []
    const film =  movie[0] || []
   
    return (
    <div className="promo-content">
        {film.bannerId
        ? <div className="promo-img">
            <Img className="promo-img"
            src={`https://ole.dev.gateway.zup.me/client-training/v1/movies/${film.bannerId}/image/original?gw-app-key=593c3280aedd01364c73000d3ac06d76`}
            loader=
              {<div className="loader-promo-img">
                <ScaleLoader color="#000"/>
                <span>LOADING</span>
              </div>
              }
            />
          </div>
        : ''
      }
      <div className="promo-img-info">
        <div className="promo-title-like">
          <div className="promo-title-content">
            <span className="promo-title">{ film.title }</span>
            <span className="promo-infos"> {`${film.genreNames},`}...  | Duração: { film.runtime } | { film.year }</span>
            <div className="promo-synopsis">
              <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
                { film.overview } 
              </Truncate>
            </div>
          </div>
          <div className="promo-like">
            {film.favorit 
              ? <i className="fa fa-heart outline-white fa-3x"></i>
              : <i className="fa fa-heart-o outline-white fa-3x"></i>
            }
          </div>
        </div>
        <div className="promo-price-rating">
          { film.acquired 
            ? <div className="promo-clap">
                <img alt="clap" width="40" height="40" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
              </div>
            : <div className="promo-price">
                { film.price ? new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(film.price) : ''}
              </div>
          }
          <div className="promo-rating">
            <div className="rating-1">
              <span className="promo-score">Nota</span>
              <span className="promo-info"> baseada em {film.voteCount} avaliações</span>
            </div>
            <div className="rating-1">
              <div>
                <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o fa-2x star" aria-hidden="true"></i>
                <i className="fa fa-star-o fa-2x star" aria-hidden="true"></i>
              </div>
              <span className="promo-score2">{ film.voteAverage }</span>
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

const mapStateToProps = state => ({ movies: state.movies.films.results})
export default connect(mapStateToProps, null)(Promotional)