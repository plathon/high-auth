import * as types from '../constants/ActionTypes'

export function signin(user = {}) {
  return {
    type: types.SIGNIN,
    user: user
  }
}

export function signup(user = {}) {
  return {
    type: types.SIGNUP,
    user: user
  }
}
