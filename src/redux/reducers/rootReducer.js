import { combineReducers } from 'redux'
import { spellsReducer, loadingSpellsReducer } from './spellsReducer'
import { charsReducer, loadingCharsReducer } from './charsReducer'
import { activePageReducer } from './pageReducer'

export const rootReducer = combineReducers({
  isLoadingSpells: loadingSpellsReducer,
  spells: spellsReducer,
  isLoadingChars: loadingCharsReducer,
  chars: charsReducer,
  activePage: activePageReducer
})
