import React, { Component } from 'react';
import UserForm from './components/UserForm'
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      title: 'Forms In React',
      userData: {
        name: '',
        description: '',
        favoriteColor: '',
        favoriteFruit: '',
        likesJavascript: true
      }
    }
  }

  userDataUpdate(userData){
    this.setState({
      userData: userData 
    }, ()=>{
      console.log('state after user data update', this.state)
    })
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className='container'>
          <div className='row'>
            <div className='col-xs-6 col-xs-offset-3'>
              <div className='panel panel-default'>
                <div className='panel-body'>
                  <UserForm 
                    onSubmit={this.userDataUpdate.bind(this)} 
                    userData={this.state.userData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
