// External Framework Components
import React, { Component, Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

// Presentational Components
import SpellSelectionBox from '../presenters/SpellSelectionBox'
import NavBar from '../presenters/NavBar'

class HomePage extends Component {
  render() {
    if (window.sessionStorage.getItem('jwt') === null) {
      return <Redirect to="/login" />
    }
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <NavBar />
          </Grid.Column>
          <Grid.Column>
            <Route path="/spells" component={SpellSelectionBox}/>
          </Grid.Column>
          {/* These components have not been defined */}
          <Route path="/characters" />
          <Route path="/sessions" />
          <Route path="/logout" />
        </Grid.Row>
      </Grid>
    )
  }
}

export default HomePage
