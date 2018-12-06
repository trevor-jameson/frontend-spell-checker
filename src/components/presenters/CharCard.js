import React, { Fragment } from 'react'
import { Menu, Card } from 'semantic-ui-react'

const CharCard = props => {
  const { name, notes, health, abilities_set, char_klasses, klass_levels, spells } = props.char

  return (
    <>
      <Card>
        <Card.Header as='h1'>
          {name}
        </Card.Header>
        <Card.Content>
          Health: {health}
        </Card.Content>
      </Card>
    </>
  )
}

export default CharCard
