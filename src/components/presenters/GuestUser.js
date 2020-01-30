import React from 'react'
import { Grid, Message } from 'semantic-ui-react'
import './GuestUser.css'

const GuestUser = () => {
  return(
    <div id='login-required'>
    <Grid centered>
    <Grid.Row>
    </Grid.Row>
    <Grid.Row verticalAlign='bottom' size={4}>
      <Grid.Column
      textAlign='centered'
      verticalAlign='bottom'
      >
        <Message
          header="Access Denied. You must login to a valid account first."
          content="401 Unauthorized Error - Login to view page"
          compact={true}
          warning={true}
        />

      </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  )
}

export default GuestUser
