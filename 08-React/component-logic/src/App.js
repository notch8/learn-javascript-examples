import React, { Component } from 'react';
import Header from './Header'
import GreetingForm from './GreetingForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Stranger'
    }
  }


  setGreeting(greeting){
    this.setState({greeting: greeting})
  }

  render() {
    return (
      <div>
        <Header greeting={this.state.greeting} />
        <Header greeting="Jane" />
        <GreetingForm 
          greeting={this.state.greeting}
          updateHandler={this.setGreeting.bind(this)}
        />
      </div>
    );
  }
}

export default App;
