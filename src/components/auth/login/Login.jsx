import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loginService, getInfo, setPwd } from '../../../state/actions/auth/loginActions'
import { resendToken } from '../../../state/actions/auth/tokenActions'

import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../../global/inputTextFieldHelper-mui/index.css'
import '../auth.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      password: '',
      token: '',
      username: '',
      newPassword: '',
      newPasswordConfirm: '',
      resendFeedbackMessage: '',
      changeScreen: 'login',
      errorMessage: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({ errorMessage: '' })
    this.setState({ resendFeedbackMessage: '' })
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change);
  }

  handleSubmitLogin = (e) => {
    const { password } = this.state
    const { user, loginService, history } = this.props

    loginService(user.email, password)
    .then((resp) => {
      switch(resp.status) {
        case 200:
          localStorage.setItem('user',true)
          history.push("/")
          break;
        default:
          this.setState({ errorMessage: resp.data.message })
      }
    })
  }
  handleSubmitGetInfo = (e) => {
    const { username } = this.state
    const { user, getInfo, resendToken } = this.props

    resendToken(user.email)
    getInfo(username, user.email)
    .then(resp => {
      switch(resp.status) {
        case 200:
          this.setState({username: ''})
          this.changeScreen('setPwd')
          break;
        default:
          this.setState({username: ''})
          this.setState({ errorMessage: resp.data.message })
      }
    })
  }
  handleSubmitSetPwd = (e) => {
    const { token, newPassword, newPasswordConfirm } = this.state
    const { user, setPwd } = this.props

    setPwd(user.email, token, newPassword, newPasswordConfirm)
    .then((resp) => {
      switch(resp.status) {
        case 200:
          this.changeScreen('login')
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

  changeScreen = (flag) => {
    this.setState({username: ''})
    this.setState({password: ''})
    this.setState({errorMessage: ''})
    this.setState({resendFeedbackMessage: ''})
    this.setState({ changeScreen: flag })
  }

  render() {
    const { password, username, changeScreen, errorMessage, resendFeedbackMessage, newPassword, token, newPasswordConfirm } = this.state
    const isEnabled = password.length > 0 || username.length > 0 
    const isEnabledSet = token.length > 0 && newPassword.length > 0 && newPasswordConfirm.length > 0
    const { user } = this.props
    return (
          <div className="container">
          {changeScreen === 'login' && (
            <div className="auth-content">
              <p className="label">INFORME SUA SENHA</p>
              <p className="label-email-gray">{user.email}</p>
              <FormControl className="form">
                <InputLabel className="label-form" htmlFor="component-simple">SENHA</InputLabel>
                <Input className="input" type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                <FormHelperText className="info-helper">
                  <span onClick={() => this.changeScreen('getId')}>Esqueceu a senha?</span>
                </FormHelperText>
                { errorMessage !== '' ? <font id="hideMe" className="error-handler" color="red"><i className="fa fa-exclamation-triangle errorIcon" aria-hidden="true"></i>{errorMessage}</font> : '' }
              </FormControl>
              <button disabled={!isEnabled} className={!isEnabled ? "button-disabled" : "button-continue"} onClick={() => this.handleSubmitLogin()} >ENTRAR</button>          
            </div>
          )}
          {changeScreen === 'getId' && (
            <div className="auth-content">
              <i onClick={() => this.changeScreen('login')} className="fa fa-arrow-left fa-2x left" aria-hidden="true"></i>
              <p className="label">CONFIRME AS INFORMAÇÕES DE SUA CONTA</p>
              <p className="label-email-gray">{user.email}</p>
              <FormControl className="form">
                <InputLabel className="label-form" htmlFor="component-simple">NOME DE USUÁRIO</InputLabel>
                <Input className="input" placeholder="username" name="username" onChange={this.handleChange}/>
                { errorMessage !== '' ? <font id="hideMe"className="error-handler" color="red"><i className="fa fa-exclamation-triangle errorIcon" aria-hidden="true"></i>{errorMessage}</font> : '' }
              </FormControl>  
              <button disabled={!isEnabled} className={!isEnabled ? "button-disabled" : "button-continue"} onClick={() => this.handleSubmitGetInfo(user.email, username)} >AVANÇAR</button>      
            </div>
          )}
          {changeScreen === 'setPwd' && (
            <div className="auth-content">
              <i onClick={() => this.changeScreen('getId')} className="fa fa-arrow-left fa-2x left" aria-hidden="true"></i>
              <p className="label">INFORME SUA NOVA SENHA</p>
              { errorMessage !== '' ? <font id="hideMe" className="error-handler" color="red"><i className="fa fa-exclamation-triangle errorIcon" aria-hidden="true"></i>{errorMessage}</font> : '' }
              <FormControl className="form">
                <InputLabel className="label-form" htmlFor="component-simple">TOKEN</InputLabel>
                <Input className="input" type="" placeholder="Token" name="token" onChange={this.handleChange}/>
                <FormHelperText onClick={() => this.resendTokenService(user.email)} 
                  className="info-helper">Não recebeu o código?
                  <font color="red">&nbsp;Enviar novamente.</font>
                </FormHelperText>
                { resendFeedbackMessage !== '' ? <font id="hideMe" className="error-handler" color="blue">{resendFeedbackMessage}</font> : '' }
              </FormControl>
              <FormControl className="form">
                <InputLabel className="label-form" htmlFor="component-simple">NOVA SENHA</InputLabel>
                <Input className="input" type="password" placeholder="New password" name="newPassword" onChange={this.handleChange}/>
              </FormControl>  
              <FormControl className="form">
                <InputLabel className="label-form" htmlFor="component-simple">CONFIRME SUA SENHA</InputLabel>
                <Input className="input" type="password" placeholder="Password confirm" name="newPasswordConfirm" onChange={this.handleChange}/>
              </FormControl>  
              <button disabled={!isEnabledSet} className={!isEnabledSet ? "button-disabled" : "button-continue"} onClick={() => this.handleSubmitSetPwd(user.email, username)} >AVANÇAR</button>      
            </div>
          )}
        </div>
    )
  }
}


const mapStateToProps = state => ({ user: state.user.user})
const mapDispatchToProps = (dispatch) => ({ 
  loginService: bindActionCreators(loginService, dispatch),
  getInfo: bindActionCreators(getInfo, dispatch),
  setPwd: bindActionCreators(setPwd, dispatch),
  resendToken: bindActionCreators(resendToken, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)