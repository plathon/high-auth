import request from 'axios'
import { makeUrl } from '../api'
import { browserHistory } from 'react-router'

import { USER_START_LOGIN,
         USER_SUCCESSFULLY_LOGGED,
         USER_LOGIN_FAILED,
         USER_START_REGISTER,
         USER_REGISTERED_SUCCESSFULLY,
         USER_REGISTER_FAILED } from '../constants/ActionTypes'

/**
* Send auth credentials to the server
**/

export function authenticateUser(user = {}) {
  return (dispatch) => {
    dispatch(userStartLogin())
    request.post( makeUrl('signin'), user )
    .then((res) => {

      let token = res.data.token
      dispatch(userSuccessfullyLogged(token))
      browserHistory.replace('/articles')

    }).catch((res) => {

      let message = res.data
      dispatch(userLoginFailed(message))

    })
  }
}

/**
* Send register request to the server
**/

export function registerUser(user = {}) {
  return (dispatch) => {
    dispatch(userStartRegister())
    request.post( makeUrl('signup'), user )
    .then((res) => {

      dispatch(userRegisteredSuccessfully())
      let token = res.data.token
      dispatch(userSuccessfullyLogged(token))
      browserHistory.replace('/articles')

    })
    .catch((res) => {

      let message = res.data
      dispatch(userLoginFailed(message))

    })
  }
}

/**
* User register actions
**/

function userStartRegister() {
  return { type: USER_START_REGISTER }
}

function userRegisterFailed() {
  return { type: USER_REGISTER_FAILED }
}

function userRegisteredSuccessfully () {
  return { type: USER_REGISTERED_SUCCESSFULLY }
}

/**
* User authentication actions
**/

function userStartLogin () {
  return { type: USER_START_LOGIN }
}

function userLoginFailed (message) {
  return { type: USER_LOGIN_FAILED, payload: message }
}

function userSuccessfullyLogged (token = null) {
  return { type: USER_SUCCESSFULLY_LOGGED, payload: token }
}
