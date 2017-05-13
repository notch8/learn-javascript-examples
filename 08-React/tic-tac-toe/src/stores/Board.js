import EventEmitter from 'events'

class Board extends EventEmitter{
  constructor(){
    super()
    this.squares = ["","","","","","","","",""]
  }

  getSquares(){
    return this.squares
  }

  setSquare(index, player){
    if(this.squares[index] === ""){
      this.squares[index] = player
    }

    this.emit('changed')
  }
}

let board = new Board()
export default board
