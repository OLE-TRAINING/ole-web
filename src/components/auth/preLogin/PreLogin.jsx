import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getUser, clearState } from '../../../state/actions/auth/preLoginActions'

import { FormControl, InputLabel, Input } from '@material-ui/core';
import '../../global/inputTextField-mui/index.css'
import '../auth.css'

class PreLogin extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      errorMessage: '',
      formValid: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { clearState } = this.props
    clearState()
    localStorage.clear()
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
    let email = e.target.value
    if(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({ formValid: true })
      return 0
    } 
    this.setState({ formValid: false })
    return 0
  }

  handleSubmit(e) {
    const { email } = this.state
    const { getUser, history } = this.props
    
    getUser(email)
		.then(data => {
			switch(data.registrationStatus) {
        case 'INEXISTENT':
          localStorage.setItem('register',true)  
					history.push('/register')
					break;
        case 'PENDING':
          localStorage.setItem('token',true)  
          history.push('/token')
					break;
        case 'REGISTERED':
          localStorage.setItem('login',true)  
          history.push('/login')
          break;
        default:
          this.setState({ errorMessage: data.data.message })
          history.push('/prelogin')
			}
		})
}

  render() {
    const { email, errorMessage, formValid } = this.state
    return (
      <div className="content">
        <p className="label">INFORME SEU E-MAIL</p>    
          <FormControl className="form">
            <InputLabel className="label-form" htmlFor="component-simple">EMAIL</InputLabel>
            <Input className="input" value={email} placeholder="E-mail" name="email" onChange={this.handleChange}/>
            { errorMessage !== '' ? <font color="red">{errorMessage}<i className="fa fa-exclamation-triangle errorIcon" aria-hidden="true"></i></font> : '' }
          </FormControl>
          <button disabled={!formValid} className={!formValid ? "button-disabled" : "button-continue"} onClick={() => this.handleSubmit(email)} >AVANÇAR</button>       
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user.user})
const mapDispatchToProps = (dispatch) => ({ 
  getUser: bindActionCreators(getUser, dispatch),
  clearState: bindActionCreators(clearState, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(PreLogin)