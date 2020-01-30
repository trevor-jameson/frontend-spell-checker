import React, { Fragment } from 'react'
import { Card } from 'semantic-ui-react'

const CharCard = props => {
  const { name, notes, health, char_klasses, klasses } = props.char

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default CharCard
