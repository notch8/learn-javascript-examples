import React, { Component } from 'react'

class RecipeIngredients extends Component{
  render(){
    let ingredients = this.props.ingredients.map(function(ingredient){
      return(<li key={ingredient.name}>{ingredient.name}</li>)
    })
    return(
      <div>
        <h1>Ingredients</h1>
        <ul>
          {ingredients}
        </ul>
      </div>
      
    )
  }
}

export default RecipeIngredients 
