import React, { Fragment, Component } from 'react'
import { fetchingSpells } from '../../redux/actions/spellActions'
import { mapSpellsToProps } from '../../redux/mapStateToProps'
import loading from '../presenters/LoadingScreen'

import { connect } from 'react-redux'
import { Grid, Header, Image, Divider } from 'semantic-ui-react'

import './SpellSelectionBox.css'
import book from '../../images/mystic_book_by_adalbertofsouza_d2xvmui-pre.jpg'

import SpellSearchBar from './SpellSearchBar'
import MatchedSpells from '../presenters/MatchedSpells'
import { filterSpellsByQuery } from '../../utils/Queries'

class SpellSelectionBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matchedSpells: false
    }
    props.fetchingSpells()
  }


  onSubmitSearch = (searchQuery) => {
    const spells = this.props.spells
    const matchedSpells = filterSpellsByQuery(spells, searchQuery)

    this.setState({matchedSpells: matchedSpells})
  }

  render() {
    return (
      <Fragment>
        <Grid>
          {this.props.isLoadingSpells ? loading :
            <Fragment>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  <SpellSearchBar
                    onSubmitSearch={this.onSubmitSearch}
                    onChange={this.onChange}
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
            </Fragment>
          }
        </Grid>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingSpells: () => {dispatch(fetchingSpells())}
  }
}

export default connect(mapSpellsToProps, mapDispatchToProps)(SpellSelectionBox)
