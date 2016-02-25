import { START_ARTICLES_RETRIVE,
         ARTICLES_RETRIEVED_SUCCESSFULLY,
         ARTICLES_RETRIEVE_FAILED } from '../constants/ActionTypes'

const initialState = {
  articles: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_ARTICLES_RETRIVE:
      return state

    case ARTICLES_RETRIEVED_SUCCESSFULLY:
      return state

    case ARTICLES_RETRIEVE_FAILED:
      return state

    default:
      return state
  }
}
