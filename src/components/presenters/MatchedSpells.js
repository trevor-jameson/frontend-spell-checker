// Add MatchedSpells as dumb, stateless component, with grid for displaying spell cards

import React from 'react'
import { Segment, Card } from 'semantic-ui-react'
import SpellCard from './SpellCard'

// Import Semantic-UI
const MatchedSpells = props => {
  const filteredSpells = props.spells.filter(spell => spell.name.includes(props.searchText))

  return (
    <Card.Group 
    itemsPerRow={3}
    className='main-page'
    >
    {filteredSpells.map(spell => <SpellCard
      key={spell.id}
      spell={spell}
      />)}
      </Card.Group>
  )
}

export default MatchedSpells
