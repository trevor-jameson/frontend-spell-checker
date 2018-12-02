const mapSpellsToProps = state => {
  return {
    spells: state.spells.filter(
      spell => spell.name.toLowerCase().includes(state.searchText.toLowerCase())
    ),
    // Should this be changed to spellIsLoading?
    isLoading: state.isLoading,
    isSearching: state.searchText.length > 0
  }
}

const mapSpellToProps = (state, ownProps) => {
  return {
    spell: state.spells.find(
      spell => spell.id === ownProps.match.params.spellId
    )
  }
}

const mapSearchTextToProps = (state) => {
  return {
    searchText: state.searchText
  }
}

const mapCharsToProps = (state) => {
  return {
    // Should charIsLoading be used here?
    chars: state.chars
  }
}

export { mapSpellToProps, mapSearchTextToProps, mapSpellsToProps }
