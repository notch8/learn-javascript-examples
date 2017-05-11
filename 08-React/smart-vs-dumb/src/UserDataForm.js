import React, { Component } from 'react'

class UserDataForm extends Component {
  constructor(props){
    super(props)
    this.state = props.userData
  }

  handleUpdate(event){

    const target = event.target
    const attribute = target.name
    const value = target.value
    this.setState({[attribute]: value})
  }

  handleLanguageChange(event){
    const target = event.target
    const attribute = target.name
    const value = target.checked

    const languages = this.state.languages
    languages[attribute] = value
    this.setState({languages: languages})
  }

  handleSubmit(event){
    this.props.userDataUpdated(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <h3>Text Input</h3>
          <label>Name</label>
          <br />
          <input 
            name='name' 
            value={this.state.name} 
            onChange={this.handleUpdate.bind(this)} />

          <h3>Textarea</h3>
          <label>Description</label>
          <br />
          <textarea
            name='descripion'
            value={this.state.descripion}
            onChange={this.handleUpdate.bind(this)} />

          <h3>Select</h3>
          <label>Pet</label>
          <br />
          <select 
            name='pet' 
            value={this.state.pet} 
            onChange={this.handleUpdate.bind(this)} 
          >
            <option></option>
            <option value='Dog'>Dog</option>
            <option value='Cat'>Cat</option>
          </select>

          <h3>Radio</h3>
          <label>Education</label>
          <br />
          <input 
            type='radio'
            name='education' 
            value="High School" 
            checked={this.state.education === 'High School'} 
            onChange={this.handleUpdate.bind(this)} 
          />
          High School
          <br />
          <input 
            type='radio'
            name='education' 
            value="College" 
            checked={this.state.education === 'College'} 
            onChange={this.handleUpdate.bind(this)}
          />
          College

          <h3>Checkboxes</h3>
          <label>Programming Languages</label>
          <br />
          <input
            type='checkbox'
            name='javascript'
            checked={this.state.languages.javascript}
            onChange={this.handleLanguageChange.bind(this)}
          />
          Javascript
          <br />
          <input
            type='checkbox'
            name='python'
            checked={this.state.languages.python}
            onChange={this.handleLanguageChange.bind(this)}
          />
          Python

          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>




    );
  }
}

export default UserDataForm;
