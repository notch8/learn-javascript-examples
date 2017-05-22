import {EventEmitter} from 'events'
import Dispatcher from '../dispatchers/Dispatcher'

class MenuItems extends EventEmitter{
  constructor(){
    super()
    this.mainCourses = [
      {
        id: 132232323,
        name: 'Cesar Salad'
      },
      {
        id: 344434343,
        name: 'Alaskan Crab Legs'
      }
    ]
  }

  addMainCourse(name){
    this.mainCourses.push({
      id: new Date().valueOf(),
      name: name
    })

    this.emit('change')
  }

  getAllMainCourses(){
    return this.mainCourses
  }

  handleActions(action){
    switch(action.type){
      case("CREATE_MAIN_COURSE"):{
        this.addMainCourse(action.name)
        break
      }
      default:{}
    }
  }
}

const menuItems = new MenuItems()
Dispatcher.register(menuItems.handleActions.bind(menuItems))
export default menuItems 
