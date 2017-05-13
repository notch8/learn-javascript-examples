import Dispatcher from '../dispatchers/Dispatcher'

export function createMainCourse(name){
  Dispatcher.dispatch({
    type: 'CREATE_MAIN_COURSE',
    name: name
  })
}

export function processFecthedMenuItems(menuItems){
  Dispatcher.dispatch({
    type: 'MENU_ITEMS_FETCHED',
    items: menuItems
  })
}
