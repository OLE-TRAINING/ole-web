import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

const InputHelperText = ({flag, placeholder, label}) => (
  <FormControl className="form">
    <InputLabel className="label-form" htmlFor="component-simple">{label}</InputLabel>
    <Input className="input" placeholder={placeholder} id="component-simple"/>
    {flag === 'token' && (
      <FormHelperText className="info-token">Não recebeu o código? <font color="red">Enviar novamente.</font></FormHelperText>
    )}
    {flag === 'login' && (
      <FormHelperText className="info-token">Esqueceu a senha?</FormHelperText>
    )}
  </FormControl>
)

export default InputHelperText
