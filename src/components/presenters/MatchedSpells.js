// Add MatchedSpells as dumb, stateless component, with grid for displaying spell cards

import React from 'react'
import SpellCard from './SpellCard'
import { connect } from 'react-redux'
import { mapSpellsToProps } from '../../redux/mapStateToProps'

// Import Semantic-UI
const MatchedSpells = props => {
  console.log(props.spells)
  return props.isLoading ? <div>Spells Loading</div> :
  <div className="ui container">
    {props.spells.map(spell => <SpellCard
      key={spell.id}
      spell={spell}
    />)}
  </div>
}



export default connect(mapSpellsToProps)(MatchedSpells)
