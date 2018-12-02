import { LOADING_SPELLS, FETCHED_SPELLS, SELECT_SPELLS } from '../actionTypes'

export const spellsReducer = (prevState = [], action) => {
  switch (action.type) {
    case FETCHED_SPELLS:
      return action.spells;
    default:
      return prevState
  }
}

export const loadingSpellsReducer = (prevState = false, action) => {
  switch (action.type) {
    case LOADING_SPELLS:
      return true
    case FETCHED_SPELLS:
      return false
    default:
      return prevState
  }
}
