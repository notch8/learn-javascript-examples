import Dispatcher from '../dispatchers/Dispatcher'

export function createMainCourse(name){
  Dispatcher.dispatch({
    type: 'CREATE_MAIN_COURSE',
    name: name
  })
}
