// Add MatchedSpells as dumb, stateless component, with grid for displaying spell cards

import React, { Fragment }from 'react'
import { Card } from 'semantic-ui-react'
import SpellCard from './SpellCard'
import './MatchedSpells.css'

// Import Semantic-UI
const MatchedSpells = props => {
  return (
    <Fragment>
      <Card.Group
        itemsPerRow={3}
        id='matched-spells'
      >
        {props.spells.map(spell => <SpellCard
          key={spell.id}
          spell={spell}
        />)}
      </Card.Group>
    </Fragment>
  )
}

export default MatchedSpells
