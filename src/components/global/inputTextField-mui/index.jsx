import React from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core';

import './index.css'

const InputTextField = ({type, placeholder, label}) => (
  <FormControl className="form">
    <InputLabel className="label-form" htmlFor="component-simple">{label}</InputLabel>
    <Input className="input" type={type} placeholder={placeholder} id={label}/>
  </FormControl>
)

export default InputTextField