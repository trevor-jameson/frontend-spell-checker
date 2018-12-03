import { combineReducers } from 'redux'
import { spellsReducer, loadingSpellsReducer } from './spellsReducer'
import { charsReducer, loadingCharsReducer } from './charsReducer'

export const rootReducer = combineReducers({
  isLoadingSpells: loadingSpellsReducer,
  spells: spellsReducer,
  isLoadingChars: loadingCharsReducer,
  chars: charsReducer,
})
