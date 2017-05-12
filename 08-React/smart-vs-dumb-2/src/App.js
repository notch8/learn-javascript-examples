import React, { Component } from 'react';
import UserDataForm from './UserDataForm'
import UserData from './UserData'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userData: {
        name: '',
        description: '',
        pet: '',
        education: '',
        languages: {
          javascript: true,
          python: false
        }
      }
    }
  }
  
  setUserData(userData){
    this.setState({userData: userData})
    console.log(userData, this.state)
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <UserDataForm userData={this.state.userData} onSave={this.setUserData.bind(this)} />

        <h1>Data</h1>
        <UserData userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
