import React, { Fragment, Component } from 'react'
import { fetchingSpells } from '../../redux/actions/spellActions'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import SpellSearchBar from '../containers/SpellSearchBar'
import MatchedSpells from './MatchedSpells'
import NavBar from './NavBar'

class SpellSelectionBox extends Component {

componentDidMount() {
  this.props.fetchingSpells()
}

  render() {
    return (
      <>
        <Grid columns={2}>
          <Grid.Row>
            <NavBar/>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated={'right'} width={13}>
              <SpellSearchBar />
              <MatchedSpells />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingSpells: () => {dispatch(fetchingSpells())}
  }
}

export default connect(null, mapDispatchToProps)(SpellSelectionBox)
