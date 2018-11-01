import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { resendToken, tokenValidator } from '../../../state/actions/auth/tokenActions'

import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'
import '../../global/inputTextFieldHelper-mui/index.css'
import '../auth.css'

class Token extends Component {
  constructor(props){
    super(props)
    this.state = {
      token: '',
      errorMessage: '',
      resendFeedbackMessage: '',
      redirect: false,
      label: 'PARA SUA SEGURANÇA, INFORME O CÓDIGO ENVIADO PARA O SEU E-MAIL:',
      label2: 'IDENTIFICAMOS QUE VOCÊ JÁ INICIOU UM CADASTRO, PARA CONCLUIRMOS, INFORME O CÓDIGO ENVIADO PARA SEU E-MAIL:'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {

  }

  handleChange = (e) => {
    this.setState({ resendFeedbackMessage: '' })
    this.setState({ errorMessage: '' })
    this.setState({ token: e.target.value });
  }

  handleSubmit = (e) => {
    const { token } = this.state
    const { user, tokenValidator, history } = this.props

    tokenValidator(user.email, token)
    .then((resp) => {
      switch(resp.status) {
        case 200:
          localStorage.setItem('login',true)
          history.replace("/login")
          break;
        default:
          this.setState({ errorMessage: resp.data.message })
      }
    })
  }

  resendTokenService(email) {
    const { resendToken } = this.props
    resendToken(email)
    .then((resp) => {
      switch(resp) {
        case 200:
          this.setState({ resendFeedbackMessage: 'Token enviado com sucesso' })
          break;
        default:
          //this.setState({ resendFeedbackMessage: resp.data.message || '' })
      }
    })
  }

  render() {
    const { user } = this.props
    const { label, label2, token, errorMessage, resendFeedbackMessage } = this.state
    const isEnabled = token.length > 0
    return (
      <div className="container">
        <div className="auth-content">
          <p className="label">{user.data.registrationStatus === "PENDING" ? label2 : label}</p>
          <p className="label-email-gray">{user.email}</p>
          <FormControl className="form">
            <InputLabel className="label-form" htmlFor="component-simple">TOKEN</InputLabel>
            <Input className="input" type="" placeholder="Token" name="token" onChange={this.handleChange}/>
            <FormHelperText onClick={() => this.resendTokenService(user.email)} 
              className="info-helper">Não recebeu o código?
              <font color="red">&nbsp;Enviar novamente.</font>
            </FormHelperText>
            { resendFeedbackMessage !== '' ? <font className="error-handler" id="hideMe" color="blue">{resendFeedbackMessage}</font> : '' }
            { errorMessage !== '' ? <font className="error-handler" id="hideMe" color="red"><i className="fa fa-exclamation-triangle errorIcon" aria-hidden="true"></i>{errorMessage}</font> : '' }
          </FormControl>
          <button disabled={!isEnabled} className={!isEnabled ? "button-disabled" : "button-continue"} onClick={() => this.handleSubmit(user.email,token)} >VALIDAR</button>            
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user.user})
const mapDispatchToProps = (dispatch) => ({ 
  tokenValidator: bindActionCreators(tokenValidator, dispatch),
  resendToken: bindActionCreators(resendToken, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Token)