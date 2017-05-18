import React, { Component } from 'react';
import {playAgain} from './actions/GameActions'

class WinnerAlert extends Component {
  handlePlayAgainClick(){
    playAgain()
  }

  render() {
    return (
      <div className='winner-container'>
        {this.props.winner &&
          <div className='winner'>
            <h4>{this.props.winner} Wins!</h4>
            <button onClick={this.handlePlayAgainClick.bind(this)}>Play Again?</button>
          </div>
        }
      </div>
    );
  }
}

export default WinnerAlert;
