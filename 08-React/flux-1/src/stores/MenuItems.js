import {EventEmitter} from 'events'

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

  getAllMainCourses(){
    return this.mainCourses
  }
}

const menuItems = new MenuItems()
export default menuItems 
