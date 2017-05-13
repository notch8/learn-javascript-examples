import EventEmitter from 'events'
import Dispatcher from '../Dispatcher'

class Players extends EventEmitter {
  constructor(){
    super()
    this.players = ["X", "O"]
    this.currentPlayerIndex = 0 
  }

  currentPlayer(){
    return this.players[this.currentPlayerIndex]
  }

  switchPlayer(){
    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0
  }

  handleAction(action){
    switch(action.type){
      case('SQUARE_CLICK'):{
        this.switchPlayer()
        break;
      }
      default: {}
    }
  }
}

const players = new Players()
Dispatcher.register(players.handleAction.bind(players))

export default players
