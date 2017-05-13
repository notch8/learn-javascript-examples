import React, { Component } from 'react'
import {createMainCourse} from '../actions/MenuItemAction'
import MenuItems from '../stores/MenuItems'

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCourseName: 'Course Name',
      mainCourses: MenuItems.getAllMainCourses()
    }
  }

  componentWillMount(){
    MenuItems.on('change', function(){
      this.setState({
        mainCourses: MenuItems.getAllMainCourses()
      })
    }.bind(this))
  }

  handleNewCourseNameChange(event){
    this.setState({newCourseName: event.target.value}) 
  }

  handleAddCourse(){
    createMainCourse(this.state.newCourseName)
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
        <h4>Add an Item</h4>
        <label>Main Course Name</label>
        <br />
        <input value={this.state.newCourseName} onChange={this.handleNewCourseNameChange.bind(this)} />
        <button onClick={this.handleAddCourse.bind(this)}>Add Course</button>
        <ul>
          {list} 
        </ul>
      </div>
    );
  }
}

export default Menu;
