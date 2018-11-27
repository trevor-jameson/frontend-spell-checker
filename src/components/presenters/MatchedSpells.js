// Add MatchedSpells as dumb, stateless component, with grid for displaying spell cards

import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import SpellCard from './SpellCard'
import { connect } from 'react-redux'

import { mapSpellsToProps } from '../../redux/mapStateToProps'
import './MatchedSpells.css'

const loadingSpells = (
  <Segment className={'loadEvent'}>
    <Dimmer active>
      <Loader size='large'>Spells Loading</Loader>
    </Dimmer>
  </Segment>
)

// Import Semantic-UI
const MatchedSpells = props => {
  return props.isLoading ? <div>{loadingSpells}</div> :
    !props.isSearching ? <div>Type in the search bar to see spells</div> :
  <div className="ui container">
    {props.spells.map(spell => <SpellCard
      key={spell.id}
      spell={spell}
    />)}
  </div>
}



export default connect(mapSpellsToProps)(MatchedSpells)
