import request from 'axios'
import { makeUrl } from '../api'
import { browserHistory } from 'react-router'
import { USER_START_LOGIN,
         USER_SUCCESSFULLY_LOGGED,
         USER_LOGIN_FAILED } from '../constants/ActionTypes'

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

function userStartLogin () {
  return { type: USER_START_LOGIN }
}

function userLoginFailed (message) {
  return { type: USER_LOGIN_FAILED, payload: message }
}

function userSuccessfullyLogged (token = null) {
  return { type: USER_SUCCESSFULLY_LOGGED, payload: token }
}
