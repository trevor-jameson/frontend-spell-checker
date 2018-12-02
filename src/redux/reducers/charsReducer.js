import { FETCHED_CHARS, LOADING_CHARS } from '../actionTypes'

export const loadingCharsReducer = (prevState = false, action) => {
  switch (action.type) {
    case LOADING_CHARS:
      return true
    case FETCHED_CHARS:
      return false
    default:
      return prevState
  }
}

export const charsReducer = (prevState = [], action) => {
  switch (action.type) {
    case FETCHED_CHARS:
      console.log('fetched user characters')
      return action.chars;
    default:
      return prevState
  }
}
