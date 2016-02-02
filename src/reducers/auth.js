import { combineReducers } from 'redux'
import { SIGNIN } from '../constants/ActionTypes'

function signin(state = {}, action) {
  switch (action.type) {
    case SIGNIN:
      console.log( action );
    default:
      return state;
  }
}

export default combineReducers({ signin })
