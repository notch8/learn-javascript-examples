import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import RecipeDetail from './RecipeDetail'
import Footer from './Footer'
import Recipes from './store/Recipes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: Recipes
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Route exact path="/" component={RecipeIndex} /> 
            <Route path="/recipes/:id" component={RecipeDetail} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
