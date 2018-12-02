import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Segment, Button, Divider, Grid } from 'semantic-ui-react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div id="welcome-screen">
      <Grid.Column width={5}>
        <div id="welcome-selector-box">
          <Segment padded inverted centered>
            <Header
            as='h6'
            content='SpellChecker'
            id='app-title'/>

            <Button primary fluid>
              <Link to="login">Login</Link>
            </Button>

            <Divider horizontal >Or</Divider>

            <Button primary fluid>
              <Link to="/create-user">Create New Account</Link>
            </Button>

            </Segment>
            </div>
          </Grid.Column>
    </div>


  )
}

export default Welcome
