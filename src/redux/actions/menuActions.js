import { SET_ACTIVE_PAGE } from '../actionTypes'

// ACTION CREATORS

function setActivePage(page) {
  return { type: SET_ACTIVE_PAGE, activePage: page }
}

export { setActivePage }
