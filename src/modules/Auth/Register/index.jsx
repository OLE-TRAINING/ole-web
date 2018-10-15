import React, { Component } from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

import './register.css'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: 'ricardo@gmail.com'
    }
  }

  render() {
    return (
      <div className="content">
        <p className="label">CRIE SUA NOVA CONTA</p>
        <p className="label-email-gray">{this.state.nome}</p>
        <FormControl className="form">
          <InputLabel className="label-form" htmlFor="component-simple">NOME COMPLETO</InputLabel>
          <Input className="input" id="component-simple"/>
        </FormControl>
        <FormControl className="form">
          <InputLabel className="label-form" htmlFor="component-simple">NOME DE USUÁRIO</InputLabel>
          <Input className="input" id="component-simple"/>
        </FormControl>
        <FormControl className="form">
          <InputLabel className="label-form" htmlFor="component-simple">SENHA</InputLabel>
          <Input className="input" id="component-simple"/>
        </FormControl>
        <button className="button-continue" >AVANÇAR</button>
      </div>
    )
  }
}

export default Register
