import jwt_decode from 'jwt-decode'
import { USER_START_LOGIN,
         USER_SUCCESSFULLY_LOGGED,
         USER_LOGIN_FAILED,
         USER_START_REGISTER,
         USER_REGISTERED_SUCCESSFULLY,
         USER_REGISTER_FAILED } from '../constants/ActionTypes'

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

    case USER_START_REGISTER:
      return state

    case USER_REGISTERED_SUCCESSFULLY:
      return state

    case USER_REGISTER_FAILED:
      return state

    default:
      return state;
  }
}
