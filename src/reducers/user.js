import jwt_decode from 'jwt-decode'
import { USER_START_LOGIN,
         USER_SUCCESSFULLY_LOGGED,
         USER_LOGIN_FAILED } from '../constants/ActionTypes'

const initialState = {
  user: {},
  token: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case USER_START_LOGIN:
      return state

    case USER_LOGIN_FAILED:
      return state

    case USER_SUCCESSFULLY_LOGGED:
      let user = jwt_decode(action.payload)
      return { ...state, token: action.payload, user: user }

    default:
      return state;
  }
}
