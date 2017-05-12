import React, { Component } from 'react'
import Header from './Header'
import Recipes from './Recipes'
import Footer from './Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Mac & Cheese'},
        {name: 'Tofu Burger'}
      ]
    }
  }
  
  render() {
    return (
      <div>
        <Header name="Brad" />
        <div>
          <Recipes recipes={this.state.recipes} />
        </div>
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
