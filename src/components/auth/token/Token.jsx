import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getUser, clearState } from '../../../state/actions/auth/preLoginActions'

import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'
import '../../global/inputTextFieldHelper-mui/index.css'
import '../auth.css'

class Token extends Component {
  constructor(props){
    super(props)
    this.state = {
      token: '',
      redirect: false,
      label: 'PARA SUA SEGURANÇA, INFORME O CÓDIGO ENVIADO PARA O SEU E-MAIL:',
      label2: 'IDENTIFICAMOS QUE VOCÊ JÁ INICIOU UM CADASTRO, PARA CONCLUIRMOS, INFORME O CÓDIGO ENVIADO PARA SEU E-MAIL:'
    }

    this.redirect = this.redirect.bind(this)
  }

  componentDidMount() {
    localStorage.removeItem('token')
  }

  handleChange = (e) => {
    this.setState({ token: e.target.value });
  }

  redirect() {
    localStorage.setItem('login',true)
    this.props.history.push("/login")
  }

  render() {
    const { user } = this.props
    const { label, label2, token } = this.state
    const isEnabled = token.length > 0
    return (
      <div className="content">
        <p className="label">{user.data.registrationStatus === "PENDING" ? label2 : label}</p>
        <p className="label-email-gray">{user.email}</p>
        <FormControl className="form">
          <InputLabel className="label-form" htmlFor="component-simple">TOKEN</InputLabel>
          <Input className="input" type="" placeholder="Token" name="token" onChange={this.handleChange}/>
          <FormHelperText className="info-helper">Não recebeu o código? <font color="red">&nbsp;Enviar novamente.</font></FormHelperText>
        </FormControl>
        <button disabled={!isEnabled} className={!isEnabled ? "button-disabled" : "button-continue"} onClick={this.redirect} >VALIDAR</button>            
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user.user})
const mapDispatchToProps = (dispatch) => ({ 
  getUser: bindActionCreators(getUser, dispatch),
  clearState: bindActionCreators(clearState, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Token)