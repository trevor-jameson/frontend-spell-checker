import { adapter } from '../../Adapter'
import { FETCHED_CHARS,  LOADING_CHARS } from '../actionTypes'

// ACTION CREATORS

function fetchedChars(chars) {
  return { type: FETCHED_CHARS, chars: chars }
}

function loadingChars() {
  return { type: LOADING_CHARS }
}

function fetchingChars(){
  return (dispatch) => {
    dispatch(loadingChars())
    adapter.getAll('characters')
    .then(chars => dispatch(fetchedChars(chars)))
  }
}
// The goal is to create an action, that when complete, dispatches another action async

export { fetchingChars, fetchedChars }
