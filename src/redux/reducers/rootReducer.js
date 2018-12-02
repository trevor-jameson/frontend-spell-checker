import { combineReducers } from 'redux'
import { spellsReducer, searchTextReducer, loadingSpellsReducer } from './spellsReducer'
import { charsReducer, loadingCharsReducer } from './charsReducer'

export const rootReducer = combineReducers({
  spells: spellsReducer,
  searchText: searchTextReducer,
  isLoadingSpells: loadingSpellsReducer,
  isLoadingChars: loadingCharsReducer,
  chars: charsReducer
})
