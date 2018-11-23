import React, { Fragment } from 'react'
import SpellSearchBar from '../containers/SpellSearchBar'
import MatchedSpells from './MatchedSpells'

const SpellSelectionBox = () => {
  return (
    <>
      <SpellSearchBar/>
      <MatchedSpells/>
    </>
  )
}

export default SpellSelectionBox
