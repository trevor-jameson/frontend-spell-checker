import { SET_ACTIVE_PAGE } from '../actionTypes'

export const activePageReducer = (prevState = 'spells', action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return action.activePage;
    default:
      return prevState
  }
}
