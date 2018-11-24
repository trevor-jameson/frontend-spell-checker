// Add MatchedSpells as dumb, stateless component, with grid for displaying spell cards

import React from 'react'
import SpellCard from './SpellCard'
import { connect } from 'react-redux'
import { mapSpellsToProps } from '../../redux/mapStateToProps'

// Import Semantic-UI
const MatchedSpells = props => {
  return props.isLoading ? <div>Spells Loading</div> :
    !props.isSearching ? <div>Type in the search bar to see spells</div> :
  <div className="ui container">
    {props.spells.map(spell => <SpellCard
      key={spell.id}
      spell={spell}
    />)}
  </div>
}



export default connect(mapSpellsToProps)(MatchedSpells)
