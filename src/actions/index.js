import * as types from '../constants/ActionTypes'

export function authenticateUser(user = {}) {
  return {
    type: types.AUTHENTICATE_USER,
    user: user
  }
}

export function registerUser(user = {}) {
  return {
    type: types.REGISTER_USER,
    user: user
  }
}
