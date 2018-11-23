import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Search } from 'semantic-ui-react'
import { fetchingSpells } from '../../redux/actions/spellActions'

const SpellSearchBar = () => {
  return(<p>Fancy Semantic-UI SearchBar</p>)
}

export default connect(fetchingSpells)(SpellSearchBar)
