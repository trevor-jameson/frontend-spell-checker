import React from 'react'
import { Card } from 'semantic-ui-react'

const SpellCard = props => {
  return (
    <Card>
      <div>
        <h4>{props.spell.name}</h4>
        <p>Description: {props.spell.desc}</p>
        <p>Casting Time: {props.spell.castingtime}</p>
        <p>Range: {props.spell.range}</p>
        <p>Classes: {props.spell.classes}</p>
      </div>
    </Card>
  )
}

export default SpellCard
