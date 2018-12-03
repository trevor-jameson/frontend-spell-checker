import React, { Fragment, Component } from 'react'
import { fetchingSpells } from '../../redux/actions/spellActions'
import { mapSpellsToProps } from '../../redux/mapStateToProps'
import loading from '../presenters/LoadingScreen'

import { connect } from 'react-redux'
import { Grid, Header, Image, Divider } from 'semantic-ui-react'

import './SpellSelectionBox.css'
import book from '../../images/mystic_book_by_adalbertofsouza_d2xvmui-pre.jpg'
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
    debugger
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
          {this.props.isLoadingSpells ? loading :
            <>
              <Grid.Row centered>
                <Grid.Column width={8} centered>
                  <SpellSearchBar
                    onClickSearch={this.onClickSearch}
                />
                <Divider clearing />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row centered>
                <Header icon
                  as='h1'
                  textAlign='center'
                  id='book-header'
                >
                  <Header.Content>
                    Spell Book
                    <Image circular
                      size='small'
                      src={book}
                    />
                  </Header.Content>
                </Header>
              </Grid.Row>

              <Grid.Row>
                <MatchedSpells
                  spells={this.state.matchedSpells ? this.state.matchedSpells : this.props.spells}
                />
              </Grid.Row>
            </>
          }
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
