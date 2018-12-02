import adapter from '../../Adapter'
import { FETCHED_SPELLS, LOADING_SPELLS } from '../actionTypes'

// ACTION CREATORS

function fetchedSpells(spells) {
  return { type: FETCHED_SPELLS, spells: spells }
}

function loadingSpells() {
  return { type: LOADING_SPELLS }
}

// Action Creators are only allowed to return {}
// however, async actions do not return {},
// instead, they make a fetch call, and then when it's done,
// dispatch another action "FETCHED_SPELLS"
function fetchingSpells(){
  return (dispatch) => {
    dispatch(loadingSpells())
    adapter.getAll('spells')
    .then(spells => dispatch(fetchedSpells(spells)))
  }
}
// The goal is to create an action, that when complete, dispatches another action async

export { fetchingSpells, fetchedSpells }
