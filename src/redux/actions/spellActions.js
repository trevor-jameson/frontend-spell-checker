import { adapter } from '../../Adapter'

// ACTION CREATORS
function loadingSpells() {
  // My first lil baby action
  return { type: "LOADING_SPELLS" }
}

function fetchedSpells(spells) {
  return { type: 'FETCHED_SPELLS', spells: spells}
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

export { fetchingSpells }
