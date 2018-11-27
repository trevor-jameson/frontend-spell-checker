import React from 'react'
import { Grid, Message } from 'semantic-ui-react'
import './NoMatch.css'

const NoMatch = () => {
  return(
    <div id='no-match'>
    <Grid centered>
    <Grid.Row>
    </Grid.Row>
    <Grid.Row verticalAlign='bottom' size={4}>
      <Grid.Column
      textAlign='centered'
      verticalAlign='bottom'
      >
        <Message
          header="Where do you think you're going?"
          content="404 Error - Page not found"
          compact={true}
          warning={true}
        />
      </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  )
}

export default NoMatch
