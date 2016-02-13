import { USER_REGISTERED, USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants/ActionTypes'

const initialState = {
  jwtToken: null,
  user: {}
}

export default function auth (state = initialState, { type, payload }) {
  switch (type) {
    case USER_REGISTERED:
      return Object.assign({}, state, payload)
    case USER_LOGGED_IN:
      return Object.assign({}, state, payload)
    case USER_LOGGED_OUT:
      return {}
    default:
      return state
  }
}
