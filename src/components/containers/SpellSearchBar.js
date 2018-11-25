import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'
import { changeSearchText } from '../../redux/actions/spellActions'
import { mapSearchTextToProps } from '../../redux/mapStateToProps'

const SpellSearchBar = (props) => (
  <div className="ui container">
    <div className="ui very large fluid input">
      <Input
        type="text"
        placeholder="Search"
        value={props.searchText}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
);


export default connect(mapSearchTextToProps, {onChange: changeSearchText})(SpellSearchBar)
