import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import UserStore from './stores/UserStore'
import UserDetail from './routes/UserDetail'
import UserRegistration from './routes/UserRegistration'
import Login from './routes/Login'


class App extends Component {
  constructor(props){
    super(props)
    this.setUser = this.setUser.bind(this)
  }

  componentWillMount(){
    UserStore.on('change', this.setUser)
  }

  componentWillUnmount(){
    UserStore.removeListener('change', this.setUser)
  }

  setUser(user){
    this.setState({user: user})
    console.log('user has been set')
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className='container'>
            <div className='row'>
              <div className='col-xs-6 col-xs-offset-3'>
                <Route 
                  exact 
                  path="/" 
                  component={Home}
                />
                <Route
                  path="/register"
                  component={UserRegistration} 
                />
                <Route
                  path="/user-detail"
                  component={UserDetail}
                />
                <Route
                  path="/login"
                  component={Login}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
