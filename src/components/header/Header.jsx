import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getGenres, changeState } from '../../state/actions/header/headerActions'

import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    
    this.logout = this.logout.bind(this)
  }

  componentWillMount() {
    const {getGenres} = this.props
    getGenres()
  }

  logout() {
    this.setState({ redirect: true })
  }

  renderHeader() {
    const { genres, changeState } = this.props
    let listGenres = genres.genres || []
    return listGenres.map( genre => (
      <Link onClick={() => changeState(genre.id)} key={genre.id} to={{ pathname: "/", search: `?genre=${genre.id}` }}>
        <span className="genre-style">{genre.name}</span>
      </Link>
    ))
  }

  render() {
    return(
      <div className="header-content">
        {this.state.redirect === true && (
          <Redirect  to="/prelogin" />
        )}
        <Link to="/" style={{ textDecoration: 'none' }} className="header-title">
          <b>OT</b>MOVIES
        </Link>
        <nav>
          <ul>
            <li className="dropdown">
              Genêros <i className="fa fa-angle-down"> </i>
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
        <i className="fa fa-search search-content"></i>
        <div className="profile-settings" onClick={this.logout}>
          <span>UserName <i className="fa fa-angle-down"></i></span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg" alt="avatar" className="img-logo"></img>
        </div>
      </div>
              
    )
  }
}

const mapStateToProps = state => ({ user: state.user.user, genres: state.genres.genres})
const mapDispatchToProps = (dispatch) => ({ 
  getGenres: bindActionCreators(getGenres, dispatch),
  changeState: bindActionCreators(changeState, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)