import Dispatcher from '../Dispatcher'

export function updateRegistration(attribute, value){
  Dispatcher.dispatch({
    type: 'UPDATE_REGISTRATION',
    attribute: attribute,
    value: value
  })
}
export function submitRegistration(userAttributes){
  Dispatcher.dispatch({
    type: 'REGISTRATION_SUBMIT'
  })
}

export function updateLogin(attribute, value){
  Dispatcher.dispatch({
    type: 'UPDATE_LOGIN',
    attribute: attribute,
    value: value
  })
}

export function submitLogin(loginAttributes){
  Dispatcher.dispatch({
    type: 'LOGIN_SUBMIT'
  })
}
