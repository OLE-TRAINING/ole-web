import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loginService } from '../../../state/actions/auth/loginActions'

import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../../global/inputTextFieldHelper-mui/index.css'
import '../auth.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      password: '',
      changeScreen: 'login',
      errorMessage: ''
    }
  }

  componentDidMount() {
    localStorage.removeItem('login')
  }
  
  handleChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = (e) => {
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

  changeScreenGetId = () => {this.setState({ changeScreen: 'getId' })}
  changeScreenSetPwd = () => {this.setState({ changeScreen: 'setPwd' })}
  changeScreenLogin = () => {this.setState({ changeScreen: 'login' })}

  render() {
    const { password, changeScreen, errorMessage } = this.state
    const isEnabled = password.length > 0
    const { user } = this.props
    return (
          <div>
          {changeScreen === 'login' && (
            <div className="content">
              <p className="label">INFORME SUA SENHA</p>
              <p className="label-email-gray">{user.email}</p>
              <FormControl className="form">
                <InputLabel className="label-form" htmlFor="component-simple">SENHA</InputLabel>
                <Input className="input" type="password" placeholder="password" name="senha" onChange={this.handleChange}/>
                <FormHelperText className="info-helper">
                  <span onClick={this.changeScreenGetId}>Esqueceu a senha?</span>
                </FormHelperText>
                { errorMessage !== '' ? <font className="error-handler" color="red">{errorMessage}<i className="fa fa-exclamation-triangle errorIcon" aria-hidden="true"></i></font> : '' }
              </FormControl>
              <button disabled={!isEnabled} className={!isEnabled ? "button-disabled" : "button-continue"} onClick={() => this.handleSubmit(user.email, password)} >ENTRAR</button>          
            </div>
          )}
          {changeScreen === 'getId' && (
            <div className="content">
              <button onClick={this.changeScreenLogin}>Voltar</button>
              <p className="label animation">VALIDAR INFO</p>
              <p className="label-email-gray animation">{user.email}</p>
              <button onClick={this.changeScreenSetPwd} >ENTRAR</button>           
            </div>
          )}
          {changeScreen === 'setPwd' && (
            <div className="content">
              <button onClick={this.changeScreenGetId}>Voltar</button>
              <p className="label">TROCAR SENHA</p>
              <p className="label-email-gray">{user.email}</p>
              <button  onClick={this.changeScreenLogin} >ENTRAR</button>          
            </div>
          )}
        </div>
    )
  }
}


const mapStateToProps = state => ({ user: state.user.user})
const mapDispatchToProps = (dispatch) => ({ 
  loginService: bindActionCreators(loginService, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)