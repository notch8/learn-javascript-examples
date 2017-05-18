import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state = props.userData
  }

  handleChange(event){
    const target = event.target
    const attribute = target.name
    //trueOrFalse ? truePart : falsePart
    const value = target.type==='checkbox' ? target.checked : target.value
    this.setState({[attribute]: value}, ()=>{
      console.log(this.state)
    })
  }

  submitForm(event){
    this.props.onSubmit(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)} >
        <div className='form-group'>
          <label
            className='control-label'>
            Name
          </label>
          <input
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label
            className='control-label'>
            Description
          </label>
          <textarea
            name='description'
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label
            className='control-label'>
            Favorite Color
          </label>
          <select
            name='favoriteColor'
            className='form-control'
            value={this.state.favoriteColor}
            onChange={this.handleChange.bind(this)}
          >
            <option value='blue'>Blue</option>
            <option value='red'>Red</option>
          </select>

        </div>

        <label>Favorite Fruit</label>
        <div className='radio'>
          <label>
            <input
              type='radio'
              name='favoriteFruit'
              value='Cherries'
              checked={this.state.favoriteFruit === 'Cherries'}
              onChange={this.handleChange.bind(this)}
            />
            Cherries
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
              type='radio'
              name='favoriteFruit'
              value='Apples'
              checked={this.state.favoriteFruit === 'Apples'}
              onChange={this.handleChange.bind(this)}

            />
            Apples
          </label>
        </div>

         <div className='checkbox'>
          <label>
            <input
              name='likesJavascript'
              type='checkbox'
              checked={this.state.likesJavasceipt}
              onChange={this.handleChange.bind(this)}
            />
            Do you like Javascript?
          </label>
        </div>

       <input 
          type='submit' value='Submit' />
      </form>
    );
  }
}

export default UserForm
