import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import Truncate from 'react-truncate'

const SpellCard = props => {
  const { name, klasses, lvl, range, castingtime, components, duration,
    concentration, highlvl, desc} = props.spell


  return (
    <Card raised>
      <Card.Header
      as='h3'
      content={props.spell.name}
      />
      <Card.Content
        textAlign='left'
      >
        <strong>Classes</strong>:  {klasses}
        <br/><strong>Level</strong>:  {lvl === 0 ? 'Cantrip' : lvl}
        <br/><strong>Range</strong>:  {range}
        <br/><strong>Casting Time</strong>:  {castingtime}
        <br/><strong>Components</strong>:  {components}
        <br/><strong>Duration:</strong>  {duration}
        <br/><strong>Concentration</strong>:  {concentration ? 'Yes' : 'No'}
        <br/><strong>High Level</strong>:  {highlvl ? highlvl : 'None'}
        <Truncate
          lines={5}
          ellipses={'...'}
        >
          <br/><strong>Description</strong>:  {desc}
        </Truncate>
      </Card.Content>
    </Card>
  )
}

export default SpellCard
