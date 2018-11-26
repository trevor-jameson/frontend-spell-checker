import React, { Fragment, Component } from 'react'
import SpellSearchBar from '../containers/SpellSearchBar'
import MatchedSpells from './MatchedSpells'
import NavBar from './NavBar'
import { fetchingSpells } from '../../redux/actions/spellActions'
import { connect } from 'react-redux'

class SpellSelectionBox extends Component {

componentDidMount() {
  this.props.fetchingSpells()
}

  render() {
    return (
      <>
        <NavBar />
        <SpellSearchBar />
        <MatchedSpells />
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
