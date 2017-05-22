import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import FormInput from '../components/FormInput'
import LoginStore from '../stores/LoginStore'
import {updateLogin, submitLogin} from '../actions/UserActions'

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      login: LoginStore.getFields(),
      errors: {}
    }
    this.updateLogin = this.updateLogin.bind(this)
  }

  componentWillMount(){
    LoginStore.on('change', this.updateLogin)
  }

  componentWillUnmount(){
    LoginStore.removeListener('change', this.updateLogin)
  }

  updateLogin(){
    this.setState(
      {
        login: LoginStore.getFields(),
        errors: LoginStore.getErrors()
      }
    )
  }

  handleChange(event){
    const target = event.target
    updateLogin(target.name, target.value)
  }

  handleSubmit(event){
    event.preventDefault()
    submitLogin()
  }

  isValid(){
    return Object.keys(this.state.errors).length === 0 
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel panel-default'>
            <div className='panel-body'>
              { !this.isValid() && 
                <div className='alert alert-danger'>
                  Please verify that all fields are filled in below.
                </div>
              }
              <h3>Login</h3>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className='row'>
                  <div className='col-xs-12'>
                    <FormInput
                      name='email'
                      label='Email'
                      value={this.state.login.email}
                      onChange={this.handleChange.bind(this)}
                      errors={this.state.errors.email}

                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12'>
                    <FormInput
                      type='password'
                      name='password'
                      label='Password'
                      value={this.state.login.password}
                      onChange={this.handleChange.bind(this)}

                      errors={this.state.errors.password}
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12'>
                    <input className='btn btn-primary' type='submit' value='Login' />
                  </div>
                </div>
              </form>
              <div>
                Don't have an account yet? <Link to='/register'>Create One</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
