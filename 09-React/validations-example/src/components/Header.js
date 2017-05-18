import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <h3>Validation Example</h3>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

