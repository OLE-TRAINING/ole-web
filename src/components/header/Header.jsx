import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {DebounceInput} from 'react-debounce-input'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getGenres, changeState, resetPage, logout, search } from '../../state/actions/header/headerActions'

import { getMovies } from '../../state/actions/home/homeActions'

import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      showMenu: false,
      searchQuery: ''
    }
    this.logout = this.logout.bind(this)
    this.stay = this.stay.bind(this)
    this.leave = this.leave.bind(this)
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    const {getGenres} = this.props
    getGenres()

  }

  showMenu(event) {
    event.preventDefault()
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }
  
  closeMenu(event) {
    event.preventDefault()
    if (!this.dropdownMenu.contains(event.target) || 1) {
        
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      })
      
    }
  }

  logout() {
    this.setState({ redirect: true })
  }

  stay() {
    this.setState({ redirect: false })
  }

  leave() {
    this.props.logout(this.props.user.email)
    window.location.replace('/prelogin')
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }
  

  renderHeader() {
    const { genres, changeState, resetPage } = this.props
    let listGenres = genres.genres || []
    return listGenres.map( genre => (
      <Link onClick={() => ((
        changeState(genre.id), 
        window.scrollTo(0, 0),
        resetPage()
        ))} 
        key={genre.id} 
        to={{ pathname: "/", search: `?genre=${genre.id}` }}>
        <span className="genre-style">{genre.name}</span>
      </Link>
    ))
  }

  render() {
    const { changeState, user } = this.props
    return(
      <div className="header-content">
          {this.state.redirect === true && (
            <div className="leave-container">
              <div className="leave-content">
                <i className="fa fa-exclamation-circle fa-3x" aria-hidden="true"></i>
                <h3>Deseja realmente sair?</h3>
                <div className="leave-content-btn">
                  <button className="btn-stay" onClick={this.leave}>Sim</button>
                  <button className="btn-leave" onClick={this.stay}>Não</button>
                </div>
              </div>
            </div>
          )}
        <Link onClick={() => ((changeState(-1),window.scrollTo(0, 0)))} to="/" style={{ textDecoration: 'none' }} className="header-title">
          <b>OT</b>MOVIES
        </Link>
        <nav>
          <ul>
            <li className="dropdown">
              Genêros <i className="fa fa-angle-down icon-ajust"></i>
              <div className="dropdown-container">
                <div className="dropdown-content">
                  {this.renderHeader()}
                </div>
              </div>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="search-content">
          <form  id="demo-2">
            <div className="buttonInside">
              <DebounceInput
              id='search-field'
              type="search"
              debounceTimeout={1000}
              onChange={event => ((
                this.props.search(event.target.value),
                this.props.getMovies(
                  event.target.value.length ? event.target.value : -1 ,
                  1, 
                  event.target.value.length ? 'name' : 'genres',
                  20,
                  true
                ),
                window.scrollTo(0, 0)
                ))}
              >
              </DebounceInput>
            </div>
          </form>
        </div>
        <div className="profile-settings" onClick={this.showMenu}>
          <div className="profile-settings-menu">
            <span>{user.data.username}</span>
            <i className="fa fa-angle-down"></i>
            {
            this.state.showMenu
              ? (
                <div
                className="dropdown-config"
                  ref={(element) => {
                    this.dropdownMenu = element
                  }}
                >
                <div >
                  <div className="dropdown-content-config">
                    <div className="content-config-ajust">
                      <i className="fa fa-user-o fa-2x" aria-hidden="true">
                      </i>
                      <span>Perfil</span>
                    </div>
                    <div className="content-config-ajust">
                      <i className="fa fa-shopping-bag fa-2x" aria-hidden="true">
                      </i>
                      <span>Pagamento</span>
                    </div>
                    <div className="content-config-ajust">
                      <Link to="/config">
                        <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
                        <span>Configurações</span>
                      </Link>
                    </div>
                    <div className="content-config-ajust" onClick={() => this.logout()}>
                      <i className="fa fa-sign-out fa-2x" aria-hidden="true">
                      </i>
                        <span>Sair</span>
                    </div>
                  </div>
                </div>
              </div>             
              )
              : (
                null
              )
          }
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg" alt="avatar" className="img-logo"></img>
        </div>
      </div>
              
    )
  }
}

const mapStateToProps = state => ({ user: state.user.user, genres: state.genres.genres, page: state.genres.page})
const mapDispatchToProps = (dispatch) => ({ 
  getGenres: bindActionCreators(getGenres, dispatch),
  changeState: bindActionCreators(changeState, dispatch),
  resetPage: bindActionCreators(resetPage, dispatch),
  logout: bindActionCreators(logout, dispatch),
  search: bindActionCreators(search, dispatch),
  getMovies: bindActionCreators(getMovies, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)