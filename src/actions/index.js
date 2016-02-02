import * as types from '../constants/ActionTypes'

export function signin(user = {}) {
  return {
    type: types.SIGNIN,
    user: user
  }
}
