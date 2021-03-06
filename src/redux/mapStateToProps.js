const mapSpellsToProps = state => {
  return {
    spells: state.spells,
    isLoadingSpells: state.isLoadingSpells,
  }
}

const mapSpellToProps = (state, ownProps) => {
  return {
    spell: state.spells.find(
      spell => spell.id === ownProps.match.params.spellId
    )
  }
}

const mapCharsToProps = (state) => {
  return {
    chars: state.chars,
    isLoadingChars: state.isLoadingChars
  }
}

export { mapSpellToProps, mapSpellsToProps, mapCharsToProps }
