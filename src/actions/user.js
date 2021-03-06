import { request } from '../api'
import jwt_decode from 'jwt-decode'
import { browserHistory } from 'react-router'

import { USER_START_LOGIN,
         USER_SUCCESSFULLY_LOGGED,
         USER_LOGIN_FAILED,
         USER_START_REGISTER,
         USER_REGISTERED_SUCCESSFULLY,
         USER_REGISTER_FAILED,
         USER_LOGGED_OUT } from '../constants/ActionTypes'

/**
* Send auth credentials to the server
**/

export function authenticateUser (user = {}, redirect = null) {
  return (dispatch) => {
    dispatch(userStartLogin())
    request().post( 'signin', user )
    .then((res) => {

      let token = res.data.token
      let user  = jwt_decode(token)
      dispatch(userSuccessfullyLogged(token, user))
      if (redirect) browserHistory.replace(redirect)
      else browserHistory.replace('/articles')

    }).catch((res) => {

      let message = res.data
      dispatch(userLoginFailed(message))

    })
  }
}

/**
* Send register request to the server
**/

export function registerUser (user = {}) {
  return (dispatch) => {
    dispatch(userStartRegister())
    request().post( 'signup', user )
    .then((res) => {

      dispatch(userRegisteredSuccessfully())
      let token = res.data.token
      let user  = jwt_decode(token)
      dispatch(userSuccessfullyLogged(token, user))
      browserHistory.replace('/articles')

    })
    .catch((res) => {

      let message = res.data
      dispatch(userLoginFailed(message))

    })
  }
}

/**
* logout user
**/

export function logoutUser () {
  return (dispatch) => {
    dispatch(userLoggedOut())
  }
}

/**
* User register actions
**/

function userStartRegister () {
  return { type: USER_START_REGISTER }
}

function userRegisterFailed () {
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

function userSuccessfullyLogged (token = null, user = {}) {
  return { type: USER_SUCCESSFULLY_LOGGED, payload: { token: token, user: user } }
}

function userLoggedOut () {
  return { type: USER_LOGGED_OUT }
}
