import React from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core';

const InputTextField = ({ placeholder, label}) => (
  <FormControl className="form">
    <InputLabel className="label-form" htmlFor="component-simple">{label}</InputLabel>
    <Input className="input" placeholder={placeholder} id="component-simple"/>
  </FormControl>
)

export default InputTextField