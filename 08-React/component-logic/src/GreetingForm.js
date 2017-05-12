import React, {Component} from 'react'

export default class GreetingForm extends Component{
  handleChange(e){
    this.props.updateHandler(e.target.value)
  }

  render(){
    return(
      <input 
        value={this.props.greeting} 
        onChange={this.handleChange.bind(this)} 
      />
    )
  }
}

