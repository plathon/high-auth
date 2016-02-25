import { START_ARTICLES_RETRIEVE,
         ARTICLES_RETRIEVED_SUCCESSFULLY,
         ARTICLES_RETRIEVE_FAILED } from '../constants/ActionTypes'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_ARTICLES_RETRIEVE:
      return state

    case ARTICLES_RETRIEVED_SUCCESSFULLY:
      return { items: action.payload }

    case ARTICLES_RETRIEVE_FAILED:
      return state

    default:
      return state
  }
}
