import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>LEARN Cafe</h1>
        <div>
          <Link to='/'>Home</Link>
          &nbsp;
          <Link to='/menu'>Menu</Link>
        </div>
      </div>
    );
  }
}

export default Header;
