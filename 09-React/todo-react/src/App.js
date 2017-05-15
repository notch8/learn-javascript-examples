import React, { Component } from 'react';
import './App.css';
import Registration from './stores/Registration'
import ValidatedInput from './ValidatedInput'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isValidated: false,
      registration: Registration.getFields(),
      errors: Registration.getErrors()
    }
  }

  handleChange(event){
    const target = event.target
    const registration = this.state.registration
    registration[target.name] = target.value
    this.setState({
      registration: registration,
      isValidated: false
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.validate()
  }

  validate(){
    this.setState({isValidated: true})
    Registration.validate()
    this.setState({errors: Registration.getErrors()})
  }

  isValid(){
    return this.state.isValidated && Object.keys(this.state.errors).length === 0
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-4 col-xs-offset-4'>
              <div className='panel panel-default'>
                <div className='panel-body'>
                  <h3>Registration</h3>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <ValidatedInput
                          label='First Name'
                          name='firstName'
                          value={this.state.registration.firstName}
                          onChange={this.handleChange.bind(this)}
                          errors={this.state.errors.firstName}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <ValidatedInput
                          label='Last Name'
                          name='lastName'
                          value={this.state.registration.lastName}
                          onChange={this.handleChange.bind(this)}
                          errors={this.state.errors.lastName}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <ValidatedInput
                          label='Email'
                          name='email'
                          value={this.state.registration.email}
                          onChange={this.handleChange.bind(this)}
                          errors={this.state.errors.email}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <ValidatedInput
                          type='password'
                          label='Password'
                          name='password'
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {this.isValid() &&
            <div className="results">
              First Name: {this.state.registration.firstName}
              <br />
              Email: {this.state.registration.email}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
