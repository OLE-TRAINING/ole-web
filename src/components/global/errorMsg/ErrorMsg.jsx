import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hiddenErrorMsg } from '../../../state/actions/appActions'

import './errorMsg.css'

class ErrorMsg extends Component {
  render() {
    return(
    <div className="errormsg-content">
      <i className="fa fa-exclamation-circle fa-3x error-icon" aria-hidden="true"></i>
      <p className="erromsg-text">Sessao expirada, por favor entre novamente </p>    
      <Link className="button-redirect" onClick={() => this.props.hiddenErrorMsg()} to="/prelogin"> 
        <p>Click aqui</p>
      </Link>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ 
  hiddenErrorMsg: bindActionCreators(hiddenErrorMsg, dispatch),
})
export default connect(null, mapDispatchToProps)(ErrorMsg)