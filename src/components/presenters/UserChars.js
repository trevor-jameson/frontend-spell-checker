import React, { Fragment, Component } from 'react'
import { Menu } from 'semantic-ui-react'

import CharCard from './CharCard'


class UserChars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Will be set to undefined, then the full char object
      activeItem: this.props.chars[0] ? this.props.chars[0].name : undefined
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <>
        <Menu vertical tabular>
          {this.props.chars.map(char => {
            return <CharCard
              char={char}
              activeItem={activeItem}
              itemClick={this.handleItemClick}
            />
          })}
        </Menu>
      </>
    )
  }
}

export default UserChars
