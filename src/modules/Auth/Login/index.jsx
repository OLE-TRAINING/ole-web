import React, { Component } from 'react'
import InputHelperText from '../../../components/InputHelperText'

import './login.css'

class Login extends React {
  constructor(props){
    super(props)
    state = {
      nome: 'ricardo@gmail.com',
    }
  }
  
  render() {
    return (
      <div className="content">
        <p className="label">INFORME SUA SENHA</p>
        <p className="label-email-gray">{this.state.nome}</p>  
        <InputHelperText placeholder="Password" label="SENHA" flag="login"/>
        <button className="button-continue" >AVANÇAR</button>
      </div>
    )
  }
}

export default Login
