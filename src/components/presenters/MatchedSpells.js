// Add MatchedSpells as dumb, stateless component, with grid for displaying spell cards

import React from 'react'
import { Card } from 'semantic-ui-react'
import SpellCard from './SpellCard'

// Import Semantic-UI
const MatchedSpells = props => {
  return (
    <>
      <Card.Group
        itemsPerRow={3}
        id='matched-spells'
      >
        {props.spells.map(spell => <SpellCard
          key={spell.id}
          spell={spell}
        />)}
      </Card.Group>
    </>
  )
}

export default MatchedSpells
