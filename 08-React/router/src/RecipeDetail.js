import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Recipes from './store/Recipes'
import RecipeIngredients from './RecipeIngredients'

class RecipeDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      recipes: Recipes
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({recipeId: id})
    let recipe = this.state.recipes.find(function(listing){
      return listing.id === parseInt(id, 10)
    })
    if(recipe){
      this.setState({recipe: recipe})
    }
  }

  render(){
    const ingredients = this.state.recipe.ingredients
    const directions = this.state.recipe.directions
    return(
      <div>
        <Link to='/'>Home</Link>
        <br />
        <h2>{this.state.recipe.name}</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/ingredients`}>Ingredients</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/directions`}>Directions</Link>
          </li>
        </ul>
        <div>
          <Route
            path={`${this.props.match.url}/ingredients`}
            render={ function(props){
              return(
                <RecipeIngredients ingredients={ingredients} />
              )
            }}
          />
          <Route
            path={`${this.props.match.url}/directions`}
            render={ function(props){
              return(
                <div>
                  <h1>Directions</h1>
                  <p>{directions}</p>
                </div>
              )
            }}
          />
        </div>
      </div>
    )
  }
}

export default RecipeDetail 
