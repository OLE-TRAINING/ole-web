import React, { Component } from 'react'
import InputTextField from '../../../components/inputTextField'

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
        <InputTextField placeholder="Name" label="NOME COMPLETO"/>
        <InputTextField placeholder="User" label="NOME DE USUÁRIO"/>
        <InputTextField placeholder="Password" label="SENHA"/>
        <button className="button-continue" >AVANÇAR</button>
      </div>
    )
  }
}

export default Register
