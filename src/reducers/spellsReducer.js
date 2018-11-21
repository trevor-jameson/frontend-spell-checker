export default function spellsReducer (
  state = {
    selectedSpell: []
  },
  action
) {
  switch (action.type) {
    case 'SELECT_SPELL':
      return {...state,
        selectedSpell: state.spells.select(spell => spell.id === action.spellId)
      };
    default:
      return state
  }
}
