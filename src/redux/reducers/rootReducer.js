import { combineReducers } from 'redux'
import { spellsReducer, searchTextReducer, loadingReducer } from './spellsReducer'

export const rootReducer = combineReducers({
  spells: spellsReducer,
  searchText: searchTextReducer,
  isLoading: loadingReducer
})
