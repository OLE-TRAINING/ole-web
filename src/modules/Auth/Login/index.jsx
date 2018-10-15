import React, { Component } from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

import './login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: 'ricardo@gmail.com',
    }
  }

  render() {
    return (
      <div className="content">
        <p className="label">INFORME SUA SENHA</p>
        <p className="label-email-gray">{this.state.nome}</p>  
        <FormControl className="form">
          <InputLabel className="label-form" htmlFor="component-simple">SENHA</InputLabel>
          <Input className="input" placeholder="password" id="component-simple"/>
          <FormHelperText className="info-token">Esqueceu a senha?</FormHelperText>
        </FormControl>
        <button className="button-continue" >AVANÇAR</button>
      </div>
    )
  }
}

export default Login
