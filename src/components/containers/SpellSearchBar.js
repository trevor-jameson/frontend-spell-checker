import React from 'react'
import { Input } from 'semantic-ui-react'

const SpellSearchBar = (props) => (
  <div className="ui container main-page">
    <div className="ui very large fluid input">
      <Input
        type="text"
        placeholder="Search"
        value={props.searchText}
        onChange={e => props.onChangeSearch(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
);

export default SpellSearchBar
