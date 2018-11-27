import React from 'react'
import { Card, Header } from 'semantic-ui-react'

const SpellCard = props => {
  debugger
  return (
    <Card raised>
      <Header>
      {props.spell.name}
      </Header>
        <p>{props.spell.desc}</p>
        <p>Casting Time: {props.spell.castingtime}</p>
        <p>Range: {props.spell.range}</p>
        <p>Classes: {props.spell.classes}</p>
    </Card>
  )
}

export default SpellCard
