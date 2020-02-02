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

class SpellSelectionBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matchedSpells: false
    }
    props.fetchingSpells()
  }

  
  // componentDidMount() {
  //   this.props.fetchingSpells()
  // }

  onSubmitSearch = (form) => {
    const spells = this.props.spells
    const matchedSpells = this.applyFilters(spells, form)

    this.setState({matchedSpells: matchedSpells})
  }

  applyFilters = (spells, form) => {

    return spells.filter(spell => {
      for (const key in form) {
        if (form[key]) {
          // string case statement breaking after irregular number of same-page searches
          // console.log(form, spell, form[key], spell[key])
          switch (typeof form[key]) {
            case 'string':
            if (!(spell[key].toLowerCase().includes(form[key].toLowerCase()))) {
              return false
            }
            break;
            case 'number':
            if (spell[key] !== form[key]) {
              return false
            }
            break;
            case 'boolean':
            if (spell[key] !== form[key]) {
              return false
            }
            break;
            default:
              console.log('bad key type in form')
            break;
          }
        }
      }
      return true
    })
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
