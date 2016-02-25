import { request } from '../api'

import { START_ARTICLES_RETRIVE,
         ARTICLES_RETRIEVED_SUCCESSFULLY,
         ARTICLES_RETRIEVE_FAILED } from '../constants/ActionTypes'

/**
* send a get request to server to retrive articles
**/

export function getArticles() {
  return (dispatch) => {
    request.get( '/articles' )
    .then((res) => {
      dispatch(articlesRetrievedSuccessfully(res.data))
    }).catch((err) => {
      let message = err.data
      dispatch(articlesRetrieveFailed(message))
    })
  }
}

function startArticlesRetrive () {
  return { type: START_ARTICLES_RETRIVE }
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
