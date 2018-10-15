import React, { Component } from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { Redirect } from 'react-router-dom'

class PreLogin extends Component {

  render() {
    return (
      <div className="content">
        <p className="label">INFORME SEU E-MAIL</p>
        <FormControl className="form">
          <InputLabel className="label-form" htmlFor="component-simple">EMAIL</InputLabel>
          <Input className="input" id="component-simple"/>
        </FormControl>
        <button className="button-continue"  >AVANÇAR</button>
      </div>
    )
  }
}

export default PreLogin
