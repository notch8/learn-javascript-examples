import {processFecthedMenuItems} from '../actions/MenuItemAction'

class MenuService{
  getMenuItems(){
    setTimeout(function(){
      processFecthedMenuItems([
        {
          id: 132232323,
          name: 'Cesar Salad'
        },
        {
          id: 344434343,
          name: 'Alaskan Crab Legs'
        }
      ])
    }, 2000)
  }
}

const menuService = new MenuService()
export default menuService
