import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Segment, Button, Divider, Grid } from 'semantic-ui-react'
import './Welcome.css'

const Welcome = () => {
  return (
    <Grid>
    <div id="welcome-screen">
      <Grid.Column>
        <div id="welcome-selector-box">
          <Segment padded inverted centered>
            <Header
            as='h6'
            content='SpellChecker'
            id='app-title'/>

            <Link to="/login">
              <Button primary fluid>
                Login
              </Button>
            </Link>

            <Divider horizontal >Or</Divider>

            <Link to="/create-user">
              <Button primary fluid>
                Create New Account
              </Button>
            </Link>

            </Segment>
            </div>
          </Grid.Column>
    </div>
    </Grid>
  )
}

export default Welcome
