import { request } from '../api'
import { makeUrl } from '../api'

import { START_ARTICLES_RETRIEVE,
         ARTICLES_RETRIEVED_SUCCESSFULLY,
         ARTICLES_RETRIEVE_FAILED } from '../constants/ActionTypes'

/**
* send a get request to server to retrive articles
**/

export function getArticles() {
  return (dispatch, getState) => {
    let token = getState().user.token
    request({}, token).get('articles')
    .then((res) => {
      dispatch(articlesRetrievedSuccessfully(res.data))
    }).catch((err) => {
      dispatch(articlesRetrieveFailed(message))
    })
  }
}

function startArticlesRetrive () {
  return { type: START_ARTICLES_RETRIEVE }
}

function articlesRetrievedSuccessfully (articles) {
  return {
    type: ARTICLES_RETRIEVED_SUCCESSFULLY,
    payload: articles
  }
}

function articlesRetrieveFailed (message) {
  return {
    type: ARTICLES_RETRIEVE_FAILED,
    payload: message
  }
}
