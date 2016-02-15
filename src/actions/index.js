import * as types from '../constants/ActionTypes'
import request from 'superagent'
import { BASE_URL } from '../api'

export function authenticateUser(user = {}) {
  return function (dispatch) {

    dispatch(userStartLogin(user))

    request
    .post(`${BASE_URL}/signin`)
    .send(user)
    .end((err, res) => {
      if (err) {
        console.log(err)
        dispatch(userLoginFailed())
      } else {
        console.log(res)
        dispatch(userSuccessfullyLogged())
      }
    })

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


function userStartLogin (user = {}) {
  return {
    type: types.USER_START_LOGIN,
    user: user
  }
}

function userLoginFailed () {
  return {
    type: types.USER_LOGIN_FAILED
  }
}

function userSuccessfullyLogged () {
  return { type: types.USER_SUCCESSFULLY_LOGGED }
}
