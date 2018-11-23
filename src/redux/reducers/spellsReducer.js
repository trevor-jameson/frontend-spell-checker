export default function spellsReducer (
  state = {
    spells: [],
    filteredSpells: [],
    spellSearch: ''
  },
  action
) {
  switch (action.type) {
    case 'SELECT_SPELL':
      return {...state,
        filteredSpells: state.spells.filter(spell => spell.name.includes(state.spellSearch))
      };
    default:
      return state
  }
}
