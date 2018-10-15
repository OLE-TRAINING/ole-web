import React from 'react'

const Input = ({type, placeholder}) => (
  <input type={type} placeholder={placeholder} />
)

const Checkbox = ({label}) => (
  <div>
    {label}
    <input type="checkbox" />
  </div>
)

Input.Checkbox = Checkbox

export default Input
