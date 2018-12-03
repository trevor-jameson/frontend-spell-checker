import React, { Fragment, Component } from 'react'
import { fetchingSpells } from '../../redux/actions/spellActions'
import { mapSpellsToProps } from '../../redux/mapStateToProps'
import loading from '../presenters/LoadingScreen'

import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import './SpellSelectionBox.css'
import { NAME, CLASS, LEVEL, SCHOOL, CONCENTRATION } from './SpellSearchBarFilters'

import SpellSearchBar from './SpellSearchBar'
import MatchedSpells from '../presenters/MatchedSpells'
import NavBar from '../presenters/NavBar'

class SpellSelectionBox extends Component {
  constructor() {
    super()
    this.state = {
      filters: [],
      matchedSpells: false
    }
  }

  componentDidMount() {
    this.props.fetchingSpells()
  }

  onClickSearch = (event) => {
    //Whatever the text is supposed to be
    // const text = event.target.
    const text = ''
    const spells = this.props.spells

    const nameMatchedSpells = spells.filter(spell => {
      return spell.name.toLowerCase().includes(text.toLowerCase())
    })

    const matchedSpells = this.applyFilters(nameMatchedSpells)

    this.setState({matchedSpells: matchedSpells})
  }

  applyFilters = (spells) => {
    return spells
  }

  render() {
    return (
      <>
        <Grid>
          <Grid.Row id='spell-box'>
              {this.props.isLoadingSpells ? loading :
              <>
              <Grid.Column width={6} centered>
                <SpellSearchBar
                  onClickSearch={this.onClickSearch}
                />
              </Grid.Column>
                <MatchedSpells
                  spells={this.state.matchedSpells ? this.state.matchedSpells : this.props.spells}
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
