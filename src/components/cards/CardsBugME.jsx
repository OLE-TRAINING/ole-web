import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Truncate from 'react-truncate'
import { ScaleLoader } from 'react-spinners'
import Img from 'react-image'

import { getMovies } from '../../state/actions/home/homeActions'
import { setSearchId } from '../../state/actions/movieDetail/movieDetailActions'

import './cards.css'

class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.loadingRef = React.createRef()
    this.state = {
      films: [],
      page: 1,
      loading: false,
      prevY: 0
    }
  }

  componentDidMount() {
  
    // Options
    let options = {
      root: null, // Page as root
      rootMargin: "0px",
      threshold: 1.0
    }
    // Create an observer
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this), //callback
      options
    )
    //Observ the `loadingRef`
    this.observer.observe(this.loadingRef)   
  }

  handleObserver(entities, observer) {
    const flag = this.props.flag
    const id = !this.props.idSearch ? this.props.idGenre : this.props.idSearch
    const y = entities[0].boundingClientRect.y
    if (this.state.prevY > y) {
      const curPage = this.props.page + 1
      this.props.getMovies(id, curPage, flag, 20, false)
      this.setState({ page: curPage })
    }
    this.setState({ prevY: y })
  }


  render() {
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    }
    const { setSearchId } = this.props
    return (
      <div className="card-component">
        {this.props.movies.results.map(item => 
          <div className="card-content" key={item.id}>
            <Link to={`/movie?${item.id}`} onClick={(event) => ((setSearchId(item.id),window.scrollTo(0, 0)))}>
              <div className="card-img-box">
                {item.posterId 
                ? <Img className="card-image"
                  src={`https://ole.dev.gateway.zup.me/client-training/v1/movies/${item.posterId}/image/original?gw-app-key=593c3280aedd01364c73000d3ac06d76`}
                    loader=
                      {<div className="card-image">
                        <ScaleLoader color="#fff"/>
                      </div>}
                    /> 
                : <p className="card-image">No data avaliable</p>
                }
                <div className="card-img-info">
                  <span className="film-year">{item.year}</span>
                  <span className="film-rating"><p>{item.voteAverage}</p></span>
                </div>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <div className="card-header-title">
                    <span className="film-title">{item.title}</span>
                    <span className="film-genre">{`${item.genreNames},`}...</span>
                    <span className="film-duration">{item.runtime}</span>
                  </div>
                  <div className="film-like">
                    {item.favorit 
                      ? <i className="fa fa-heart fa-2x"></i> 
                      : <i className="fa fa-heart-o fa-2x"></i>
                    }
                  </div>
                </div>
                <div className="film-synopsis">
                  {item.overview
                    ? <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
                        {item.overview}
                      </Truncate>
                    : <div>
                        <p>Não há sinopse para este filme</p>
                      </div>  
                  }
                </div>
                <div className="film-view">
                  { item.acquired 
                    ? <img alt="" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" /> 
                    : <span>{ new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.price) }</span>
                  }
                </div>
              </div>
            </Link>
          </div> 
        )}
        <div className="load-teste"
          ref={loadingRef => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span className="loader-card">
            <ScaleLoader color="#129793"/>
            <span>LOADING</span>
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  movies: state.movies.films, 
  idGenre: state.genres.idGenre,
  page: state.genres.page
})
const mapDispatchToProps = (dispatch) => ({ 
  getMovies: bindActionCreators(getMovies, dispatch),
  setSearchId: bindActionCreators(setSearchId,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Cards)

