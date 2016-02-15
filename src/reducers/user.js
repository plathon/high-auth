import { USER_START_LOGIN,
         USER_SUCCESSFULLY_LOGGED,
         USER_LOGIN_FAILED } from '../constants/ActionTypes'

const initialState = {
  jwtToken: null,
  user: {}
}

export default function auth (state = initialState, { type, payload }) {
  switch (type) {
    case USER_START_LOGIN:
      console.log('user start login')
    case USER_SUCCESSFULLY_LOGGED:
      console.log('user successfully logged')
    case USER_LOGIN_FAILED:
      console.log('user login failed')
    default:
      return state
  }
}
