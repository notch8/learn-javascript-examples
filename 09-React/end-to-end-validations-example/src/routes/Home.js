import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-xs-12">
          <h1>Home Page</h1>
          <ul>
            <li>
              <Link to={'/user-detail'}>Protected Page</Link>
            </li>
            <li>
              <Link to={'/register'}>Create Account</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
