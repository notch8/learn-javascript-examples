import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import FormInput from '../components/FormInput'
import RegistrationStore from '../stores/RegistrationStore'
import {updateRegistration, submitRegistration} from '../actions/UserActions'

class UserRegistration extends Component {
  constructor(props){
    super(props)
    this.state={
      registration: RegistrationStore.getFields(),
      errors: {}
    }
    this.updateRegistration= this.updateRegistration.bind(this)
  }

  componentWillMount(){
    RegistrationStore.on('change', this.updateRegistration)
  }

  componentWillUnmount(){
    RegistrationStore.removeListener('change', this.updateRegistration)
  }

  updateRegistration(){
    this.setState(
      {
        registration: RegistrationStore.getFields(), 
        errors: RegistrationStore.getErrors()
      }
    )
  }

  handleChange(event){
    const target = event.target
    updateRegistration(target.name, target.value)
  }

  handleSubmit(event){
    event.preventDefault()
    submitRegistration()
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
              <h3>Registration</h3>
              <form onSubmit={this.handleSubmit.bind(this)}>

                <div className='row'>
                  <div className='col-xs-12'>
                    <FormInput
                      name='firstName'
                      label='First Name'
                      value={this.state.registration.firstName}
                      onChange={this.handleChange.bind(this)}
                      errors={this.state.errors.firstName}
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12'>
                    <FormInput
                      name='lastName'
                      label='Last Name'
                      value={this.state.registration.lastName}
                      onChange={this.handleChange.bind(this)}

                      errors={this.state.errors.lastName}
                    />
                  </div>
                </div>


                <div className='row'>
                  <div className='col-xs-12'>
                    <FormInput
                      name='email'
                      label='Email'
                      value={this.state.registration.email}
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
                      value={this.state.registration.password}
                      onChange={this.handleChange.bind(this)}

                      errors={this.state.errors.password}
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12'>
                    <input className='btn btn-primary' type='submit' value='Submit' />
                  </div>
                </div>
              </form>
              <div>
                Already have an account? <Link to='/login'>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegistration
