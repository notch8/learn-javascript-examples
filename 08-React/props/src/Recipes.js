import React, { Component } from 'react';

class Recipes extends Component {
  render() {
    let recipes = this.props.recipes.map(function(recipe){
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
