import React, { Component } from 'react';
import './App.css';
import Board from './stores/Board'

class App extends Component {
  constructor(){
    super()
    this.state={
      squares: Board.getSquares()
    }
  }

  componentWillMount(){
    Board.on('changed', function(){
      this.setState({squares: Board.getSquares()})
    }.bind(this))
  }

  handleClick(event){
    console.log(event.target.dataset.id)
  }

  render() {
    const squares = this.state.squares.map(function(square, index){
      return(
        <div 
          key={index} 
          data-id={index}
          onClick={this.handleClick} 
          className='square'>
          {square}
        </div>
      ) 
    }.bind(this))
    return (
      <div className="App">
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}

export default App;
