import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getUser, clearState } from '../../../state/actions/auth/preLoginActions'

import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../../global/inputTextFieldHelper-mui/index.css'
import '../auth.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      password: ''
    }

    this.redirect = this.redirect.bind(this)
  }
  
  handleChange = (e) => {
    this.setState({ password: e.target.value });
  }

  redirect() {
    localStorage.setItem("user","true")
    this.props.history.push("/")
  }

  render() {
    const { password } = this.state
    const isEnabled = password.length > 0
    const { user } = this.props
    return (
      <div className="content">
        <p className="label">INFORME SUA SENHA</p>
        <p className="label-email-gray">{user.email}</p>
        <FormControl className="form">
          <InputLabel className="label-form" htmlFor="component-simple">SENHA</InputLabel>
          <Input className="input" type="password" placeholder="password" name="senha" onChange={this.handleChange}/>
          <FormHelperText className="info-helper">Esqueceu a senha?</FormHelperText>
        </FormControl>
        <button disabled={!isEnabled} className={!isEnabled ? "button-disabled" : "button-continue"} onClick={this.redirect} >ENTRAR</button>            
      </div>
    )
  }
}


const mapStateToProps = state => ({ user: state.user.user})
const mapDispatchToProps = (dispatch) => ({ 
  getUser: bindActionCreators(getUser, dispatch),
  clearState: bindActionCreators(clearState, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)