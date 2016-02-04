import { combineReducers } from 'redux'
import { AUTHENTICATE_USER,
         REGISTER_USER } from '../constants/ActionTypes'

const initialState = {
  jwtToken: null,
  user: {}
}

function auth (state = initialState, action) {

  switch (action.type) {
    case AUTHENTICATE_USER:
      console.log( action );
    case REGISTER_USER:
      console.log( action );
    default:
      return state;
  }

}

export default combineReducers({ auth })
