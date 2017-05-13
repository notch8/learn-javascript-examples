import {EventEmitter} from 'events'
import Dispatcher from '../dispatchers/Dispatcher'
import MenuService from '../services/Menu'

class MenuItems extends EventEmitter{
  constructor(){
    super()
    this.mainCourses = []
  }

  addMainCourse(name){
    this.mainCourses.push({
      id: new Date().valueOf(),
      name: name
    })

    this.emit('change')
  }

  getAllMainCourses(){
    if(this.mainCourses.length == 0){
      MenuService.getMenuItems()
    }
    return this.mainCourses
  }

  addMainCourses(items){
    this.mainCourses = items
    this.emit('change')
  }

  handleActions(action){
    console.log(action)
    switch(action.type){
      case("CREATE_MAIN_COURSE"):{
        this.addMainCourse(action.name)
        break
      }

      case("MENU_ITEMS_FETCHED"):{
        this.addMainCourses(action.items)
        break
      }
      default:{}
    }
  }
}

const menuItems = new MenuItems()
Dispatcher.register(menuItems.handleActions.bind(menuItems))
window.dispatcher = Dispatcher
export default menuItems 
