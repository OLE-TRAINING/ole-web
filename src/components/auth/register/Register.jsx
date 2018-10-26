import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {inputFieldValidator} from '../../../utils/inputFieldValidator'
import { createUser } from '../../../state/actions/auth/registerActions'

import { FormControl, InputLabel, Input } from '@material-ui/core'
import '../../global/inputTextField-mui/index.css'
import '../auth.css'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      username: '',
      password: '',
      nameValid: false,
      usernameValid: false,
      passwordValid: false,
      isEnabled: false,
      errorMessage: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    localStorage.removeItem('register')
  }
  
  handleChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change);
  }

  InputValidator(e, state, rule) {
    let change = {}
    if(inputFieldValidator(state,rule)) {
      change[e.target.name + 'Valid'] = true
      this.setState(change)
    } else {
      change[e.target.name + 'Valid'] = false
      this.setState(change)
    }
  }

  handleSubmit = (e) => {
    const { name, username, password } = this.state
    const { user, createUser, history } = this.props

    createUser(user.email, name, username, password)
    .then(resp => {
      switch(resp.status) {
        case 200:
          localStorage.setItem('token',true)
          history.push('/token')
          break;
        default:
        this.setState({ errorMessage: resp.data.message })
      }
    })
  }


  render() {
    const { user } = this.props
    const { name, username, password, nameValid, passwordValid, usernameValid, errorMessage } = this.state
    const isEnabled = nameValid && usernameValid && passwordValid 
    
    return (
      <div className="content">
        <p className="label">CRIE SUA NOVA CONTA</p>
        <p className="label-email-gray">{user.email}</p>
          { errorMessage !== '' ? <font className="error-handler" color="red">{errorMessage}<i className="fa fa-exclamation-triangle errorIcon" aria-hidden="true"></i></font> : '' }
          <FormControl className="form">
            <InputLabel className="label-form" htmlFor="component-simple">NOME COMPLETO</InputLabel>
            <Input className="input" value={name} placeholder="Name" name="name" 
              onChange={this.handleChange} 
              onKeyUp={(e) => this.InputValidator(e, name,'name')}               
              onBlur={(e) => this.InputValidator(e, name,'name')}/>
              { (!nameValid) ? <font color="red" className="error-handler" >max 50 caracteres</font> : null }          
          </FormControl>
          <FormControl className="form">
            <InputLabel className="label-form" htmlFor="component-simple">NOME DE USUÁRIO</InputLabel>
            <Input className="input" value={username} placeholder="User" name="username" 
              onChange={this.handleChange} 
              onKeyUp={(e) => this.InputValidator(e, username,'username')} 
              onBlur={(e) => this.InputValidator(e, username,'username')}/>
              { (!usernameValid) ? <font color="red" className="error-handler" >max 15 caracteres</font> : null }
          </FormControl>
          <FormControl className="form">
            <InputLabel className="label-form" htmlFor="component-simple">SENHA</InputLabel>
            <Input className="input" type="password" value={password} placeholder="Password" name="password" 
              onChange={this.handleChange} 
              onKeyUp={(e) => this.InputValidator(e, password,'password')} 
              onBlur={(e) => this.InputValidator(e, password,'password')}/>
              { (!passwordValid) ? <font color="red" className="error-handler" >min 6 e max 10 caracteres, letras e números</font> : null }
          </FormControl>
        <button disabled={!isEnabled} className={!isEnabled ? "button-disabled" : "button-continue"} onClick={() => this.handleSubmit(user.email, name, username, password)} >AVANÇAR</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user.user})
const mapDispatchToProps = (dispatch) => ({ 
  createUser: bindActionCreators(createUser, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)