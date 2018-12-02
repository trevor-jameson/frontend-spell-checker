import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import Truncate from 'react-truncate'

const SpellCard = props => {
  debugger
  return (
    <Card raised>
      <Card.Header
      as='h3'
      centered
      content={props.spell.name}
      />
      <Card.Content>
        Range: {props.spell.range}
        <br/>Classes: {props.spell.classes}
        <br/>Casting Time: {props.spell.castingtime}
        <Truncate
          lines={4}
          ellipses={'...'}
        >
          <br/>Description: {props.spell.desc}
        </Truncate>
      </Card.Content>
    </Card>
  )
}

export default SpellCard
