import { LOADING_SPELLS, FETCHED_SPELLS, SELECT_SPELLS, CHANGE_SEARCH_TEXT } from '../actionTypes'

export const spellsReducer = (prevState = [], action) => {
  switch (action.type) {
    case FETCHED_SPELLS:
      console.log('fetched spells')
      return action.spells;
    default:
      return prevState
  }
}

export const searchTextReducer = (prevState = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.searchText
    default:
      return prevState;
  }
}

export const loadingReducer = (prevState = false, action) => {
  switch (action.type) {
    case LOADING_SPELLS:
      return true
    case FETCHED_SPELLS:
      return false
    default:
      return prevState
  }
}
