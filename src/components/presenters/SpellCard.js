import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import Truncate from 'react-truncate'

const SpellCard = props => {
  return (
    <Card raised>
      <Card.Header
      as='h3'
      centered
      content={props.spell.name}
      />
      <Card.Content>
        Classes: {props.spell.klasses}
        <br/>Level: {props.spell.lvl}
        <br/>Range: {props.spell.range}
        <br/>Casting Time: {props.spell.castingtime}
        <br/>Components: {props.spell.components}
        <br/>Duration {props.spell.duration}
        <br/>Concentration: {props.spell.concentration ? 'Yes' : 'No'}
        <br/>High Level: {props.spell.highlvl}
        <Truncate
          lines={5}
          ellipses={'...'}
        >
          <br/>Description: {props.spell.desc}
        </Truncate>
      </Card.Content>
    </Card>
  )
}

export default SpellCard
