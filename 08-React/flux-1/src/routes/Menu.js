import React, { Component } from 'react'
import MenuItems from '../stores/MenuItems'

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainCourses: MenuItems.getAllMainCourses()
    }
  }
  render() {
    let list = this.state.mainCourses.map(function(dish){
      return(
        <li key={dish.id}>
          {dish.name}
        </li>
      )
    })
    return (
      <div>
        <h3>Main Courses</h3>
        <ul>
          {list} 
        </ul>
      </div>
    );
  }
}

export default Menu;
