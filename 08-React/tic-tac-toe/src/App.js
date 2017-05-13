import React, { Component } from 'react';
import './App.css';
import Board from './stores/Board'
import Players from './stores/Players'
import {squareClick} from './actions/GameActions'
import WinnerAlert from './WinnerAlert'

class App extends Component {
  constructor(){
    super()
    this.state={
      squares: Board.getSquares()
    }
  }

  componentWillMount(){
    Board.on('changed', this.handleBoardChange.bind(this))
  }

  componentWillUnmount(){
    Board.removeListener('changed', this.handleBoardChange)
  }

  handleBoardChange(){
    this.setState({
      squares: Board.getSquares(),
      winner: Board.getWinner()
    })
  }

  handleClick(event){
    const currentPlayer = Players.currentPlayer()
    squareClick(event.target.dataset.id, currentPlayer)
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
      <div>
        <WinnerAlert winner={this.state.winner} />
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}

export default App;
