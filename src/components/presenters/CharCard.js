import React, { Fragment } from 'react'
import { Menu, Card } from 'semantic-ui-react'

const CharCard = props => {
  const { name, notes, health, abilities_set, char_klasses, klass_levels, spells, klasses } = props.char
  debugger
  return (
    <>
      <Card>
        <Card.Header as='h1'>
          {name} - {klasses.map(klass => klass.name)}
        </Card.Header>
        <Card.Content>
          Health: {health}
          <br/>Notes: {notes}
          {char_klasses.map}
        </Card.Content>
      </Card>
    </>
  )
}

export default CharCard
