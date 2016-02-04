import { combineReducers } from 'redux'
import { SIGNIN, SIGNUP } from '../constants/ActionTypes'

function signin(state = {}, action) {
  switch (action.type) {
    case SIGNIN:
      console.log( action );
    default:
      return state;
  }
}

function signup(state = {}, action) {
  switch (action.type) {
    case SIGNUP:
      console.log( action );
    default:
      return state;
  }
}

export default combineReducers({ signin, signup })
