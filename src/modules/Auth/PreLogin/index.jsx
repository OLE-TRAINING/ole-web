import React, { Component } from 'react'
import InputTextField from '../../../components/inputTextField'

class PreLogin extends Component {

  render() {
    return (
      <div className="content">
        <p className="label">INFORME SEU E-MAIL</p>
        <InputTextField placeholder="E-mail" label="EMAIL"/>
        <button className="button-continue"  >AVANÇAR</button>
      </div>
    )
  }
}

export default PreLogin
