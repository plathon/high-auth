import * as types from '../constants/ActionTypes'

export function authenticateUser(user = {}) {
  return {
    type: types.USER_LOGGED_IN,
    payload: {
      jwtToken: "HuiHWEDavvVJHA36@#YFc3c3nb3C#i7dfajc",
      user: user
    }
  }
}

export function logoutUser(user = {}) {
  return {
    type: types.USER_LOGGED_OUT
  }
}

export function registerUser(user = {}) {
  return {
    type: types.USER_REGISTERED,
    payload: {
      jwtToken: "HuiHWEDavvVJHA36@#YFc3c3nb3C#i7dfajc",
      user: user
    }
  }
}
