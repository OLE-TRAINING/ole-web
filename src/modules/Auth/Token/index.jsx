import React, { Component } from 'react'
import InputHelperText from '../../../components/InputHelperText'

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
        <InputHelperText placeholder="Token" label="TOKEN DE VALIDAÇÃO" flag="token"/>
        <button className="button-continue" >AVANÇAR</button>
      </div>
    )
  }
}

export default Token
