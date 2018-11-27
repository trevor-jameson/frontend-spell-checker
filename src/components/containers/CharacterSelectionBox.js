import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import NavBar from '../presenters/NavBar'
import SpellSearchBar from './SpellSearchBar'
import MatchedSpells from '../presenters/NoMatch'

class CharacterSelectionBox extends Component {

  componentDidMount() {
    this.props.fetchingSpells()
  }

  render() {
    return (
      <>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <NavBar />
            </Grid.Column>
            <Grid.Column floated={'right'} width={12}>
              <SpellSearchBar />
              <MatchedSpells />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

// TODO: Connect this to store once reducers, actions, and mappers are established
export default CharacterSelectionBox
