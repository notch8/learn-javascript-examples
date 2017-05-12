import React, { Component } from 'react';
import Header from './Header'
import GreetingInput from './GreetingInput'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Bob'
    }
  }

  updateGreeting(greeting){
    this.setState({greeting: greeting})
  }
  render() {
    return (
      <div>
        <div>
          <Header greeting={this.state.greeting} />
        </div>
        <div>
          <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
