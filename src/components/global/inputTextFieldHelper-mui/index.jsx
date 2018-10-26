import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

import './index.css'

const InputHelperText = ({flag, placeholder, label, type}) => (
  <FormControl className="form">
    <InputLabel className="label-form" htmlFor="component-simple">{label}</InputLabel>
    <Input className="input" type={type} placeholder={placeholder} id={label}/>
    {flag === 'token' && (
      <FormHelperText className="info-helper">Não recebeu o código? <font color="red">&nbsp;Enviar novamente.</font></FormHelperText>
    )}
    {flag === 'login' && (
      <FormHelperText className="info-helper">Esqueceu a senha?</FormHelperText>
    )}
  </FormControl>
)

export default InputHelperText
