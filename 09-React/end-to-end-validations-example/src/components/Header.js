import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render(){
    return(
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-brand'>
              Validation Example
            </div>
            <div className='navbar-left navbar-text'>
              <Link to='/'>
                Home
              </Link>
            </div>
            <div className='navbar-right navbar-text'>
              <Link to='/login'>
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

