import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getUser, clearState } from '../../../state/actions/auth/preLoginActions'

import { FormControl, InputLabel, Input } from '@material-ui/core'
import '../auth.css'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      userName: '',
      password: '',
      redirect: false
    }

    this.redirect = this.redirect.bind(this)
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }
  handleUserChange = (e) => {
    this.setState({ userName: e.target.value });
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  redirect() {
    localStorage.setItem('token',true)
    this.props.history.push("/token")
  }

  render() {
    const { user } = this.props
    const { name, userName, password } = this.state
    const isEnabled = name.length > 0 && userName.length > 0 && password.length > 0
    return (
      <div className="content">
        <p className="label">CRIE SUA NOVA CONTA</p>
        <p className="label-email-gray">{user.email}</p>
          <FormControl className="form">
            <InputLabel className="label-form" htmlFor="component-simple">NOME COMPLETO</InputLabel>
            <Input className="input" value={name} placeholder="Name" name="name" onChange={this.handleNameChange}/>
          </FormControl>
          <FormControl className="form">
            <InputLabel className="label-form" htmlFor="component-simple">NOME DE USUÁRIO</InputLabel>
            <Input className="input" value={userName} placeholder="User" name="user" onChange={this.handleUserChange}/>
          </FormControl>
          <FormControl className="form">
            <InputLabel className="label-form" htmlFor="component-simple">SENHA</InputLabel>
            <Input className="input" type="password" value={password} placeholder="Password" name="password" onChange={this.handlePasswordChange}/>
          </FormControl>
        <button disabled={!isEnabled} className={!isEnabled ? "button-disabled" : "button-continue"} onClick={this.redirect} >AVANÇAR</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user.user})
const mapDispatchToProps = (dispatch) => ({ 
  getUser: bindActionCreators(getUser, dispatch),
  clearState: bindActionCreators(clearState, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)