import React, { Component } from 'react'
import Header from './Header'
import Recipes from './Recipes'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Recipes />
        </div>
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
