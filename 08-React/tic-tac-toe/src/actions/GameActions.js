import Dispatcher from '../Dispatcher'

export function squareClick(index, player){
  Dispatcher.dispatch({
    type: 'SQUARE_CLICK',
    index: index,
    player: player
  })
}

export function playAgain(){
  Dispatcher.dispatch({
    type: 'RESET_GAME'
  })
}
