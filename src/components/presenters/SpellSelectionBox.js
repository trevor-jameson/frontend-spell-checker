import React, { Fragment, Component } from 'react'
import { fetchingSpells } from '../../redux/actions/spellActions'
import { mapSpellsToProps } from '../../redux/mapStateToProps'
import loading from './LoadingScreen'

import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import './SpellSelectionBox.css'

import SpellSearchBar from '../containers/SpellSearchBar'
import MatchedSpells from './MatchedSpells'
import NavBar from './NavBar'

class SpellSelectionBox extends Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
      filters: []
    }
  }

  onChangeSearch = (text) => {
    this.setState({searchText: text})
  }

componentDidMount() {
  this.props.fetchingSpells()
}

  render() {

    return (
      <>
        <Grid>
          <Grid.Row>
            <NavBar/>
          </Grid.Row>
          <Grid.Row>
          {this.props.isLoadingSpells ? loading :
          <>
            <SpellSearchBar
              searchText={this.state.searchText}
              onChange={this.onChangeSearch}
            />
            <MatchedSpells
              searchText={this.state.searchText}
              spells={this.props.spells}
            />
          </>
          }
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

export default connect(mapSpellsToProps, mapDispatchToProps)(SpellSelectionBox)
