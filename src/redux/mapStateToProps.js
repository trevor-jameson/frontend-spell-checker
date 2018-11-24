const mapSpellsToProps = state => {
  return {
    spells: state.spells.filter(
      spell => spell.name.toLowerCase().includes(state.searchText.toLowerCase())
    ),
    loading: state.loading
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

export { mapSpellToProps, mapSearchTextToProps, mapSpellsToProps }
