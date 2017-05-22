import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher'

class UserStore extends EventEmitter{
  constructor(){
    super()
    this.fields = {}
  }

  getFields(){
    return this.fields
  }

  updateUser(attributes){
    this.fields = attributes
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("CREATE_USER"):{
        this.updateUser(action.attributes)
        break
      }
      default:{}
    }
  }
}

const store = new UserStore()
Dispatcher.register(store.handleActions.bind(store))
window.store = store
export default store
