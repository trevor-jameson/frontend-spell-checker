import React from 'react'

const SpellCard = props => {
  console.log(props.spell)
  return (
    <div>
      <h4>{props.spell.name}</h4>
      <p>Description: {props.spell.desc}</p>
      <p>Casting Time: {props.spell.castingtime}</p>
      <p>Range: {props.spell.range}</p>
      <p>Classes: {props.spell.classes}</p>
    </div>
  )
}

export default SpellCard
