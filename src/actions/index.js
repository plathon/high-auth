import * as types from '../constants/ActionTypes'

export function authenticateUser(user = {}) {
  return {
    type: types.AUTHENTICATE_USER,
    data: {
      jwtToken: "HuiHWEDavvVJHA36@#YFc3c3nb3C#i7dfajc",
      user: user
    }
  }
}

export function registerUser(user = {}) {
  return {
    type: types.REGISTER_USER,
    data: {
      jwtToken: "HuiHWEDavvVJHA36@#YFc3c3nb3C#i7dfajc",
      user: user
    }
  }
}
