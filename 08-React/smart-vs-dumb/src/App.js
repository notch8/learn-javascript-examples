import React, { Component } from 'react'
import UserDataForm from './UserDataForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userData: {
        name: '',
        description: '',
        pet: '',
        languages: {
          javascript: false,
          python: false
        },
        education: ''
      }
    }
  }
  userDataUpdated(userData){
    console.log("user data in App:", userData)
  }
  render() {
    return (
      <div>
        <UserDataForm 
          userData={this.state.userData} 
          userDataUpdated={this.userDataUpdated.bind(this)}
        />
      </div>
    );
  }
}

export default App;
