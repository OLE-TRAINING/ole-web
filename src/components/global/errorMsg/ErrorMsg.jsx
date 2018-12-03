import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hiddenErrorMsg } from '../../../state/actions/appActions'

import './errorMsg.css'

class ErrorMsg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msgErro: ''
    }
  }

  componentDidMount() {
    const { status } = this.props
    switch(status) {
      case 401:
        this.setState({ msgErro: 'Sessao expirada, por favor entre novamente' })
        break;
      default:
        this.setState({ msgErro: 'Erro inexperado' })
    }
  }

  render() {
    return(
    <div className="errormsg-content">
      <i className="fa fa-exclamation-circle fa-3x error-icon" aria-hidden="true"></i>
      <p className="erromsg-text">{this.state.msgErro}</p>    
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