import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <h3>{this.props.title}</h3>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
