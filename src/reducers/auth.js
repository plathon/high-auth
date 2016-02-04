import { combineReducers } from 'redux'
import { AUTHENTICATE_USER,
         REGISTER_USER } from '../constants/ActionTypes'

const initialState = {
  jwtToken: null,
  user: {}
}

export function auth (state = initialState, action) {

  switch (action.type) {
    case AUTHENTICATE_USER:
      return state
    case REGISTER_USER:
      return state;
    default:
      return state;
  }

}

//export default combineReducers({ auth })
