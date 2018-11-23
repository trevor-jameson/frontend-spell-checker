const mapSpellsToProps = state => {
  return {
    // Searching spell name and description for matches
    spells: state.spells.filter(s =>
        s.name.toLowerCase().includes(state.searchText.toLowerCase()) ||
        s.desc.toLowerCase().includes(state.searchText.toLowerCase())
    ),
    loading: state.loading
  }
}

const mapSpellToProps = (state, ownProps) => {
  return {
    matchedSpell: state.spells.find(spell =>
      spell.id === ownProps.match.params.spellId
    )
  }
}

const mapSearchTextToProps = (state) => {
  return {
    searchText: state.searchText
  }
}

export { mapSpellToProps, mapSearchTextToProps, mapSpellsToProps }
