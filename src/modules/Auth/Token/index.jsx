import React, { Component } from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

import './token.css'

class Token extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: 'ricardo@gmail.com',
      label: 'PARA SUA SEGURANÇA, INFORME O CÓDIGO ENVIADO PARA O SEU E-MAIL:',
      label2: 'IDENTIFICAMOS QUE VOCÊ JÁ INICIOU UM CADASTRO, PARA CONCLUIRMOS, INFORME O CÓDIGO ENVIADO PARA SEU E-MAIL:'
    }
  }

  render() {
    return (
      <div className="content">
        <p className="label">{this.state.label}</p>
        <p className="label-email-red">{this.state.nome}</p>
        <FormControl className="form">
          <InputLabel className="label-form" htmlFor="component-simple">TOKEN DE VALIDAÇÃO</InputLabel>
          <Input className="input" placeholder="token" id="component-simple"/>
          <FormHelperText className="info-token">Não recebeu o codigo? <font color="red">Enviar novamente.</font></FormHelperText>
        </FormControl>
        <button className="button-continue" >AVANÇAR</button>
      </div>
    )
  }
}

export default Token
