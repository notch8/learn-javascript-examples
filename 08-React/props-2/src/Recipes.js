import React, { Component } from 'react';

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
      ]
    }
  }

  render() {
    let recipes = this.state.recipes.map(function(recipe){
      return(
        <li key={recipe.name}>{recipe.name}</li>
      )
    })
    return (
      <ul>
        {recipes}
      </ul>
    );
  }
}

export default Recipes;
