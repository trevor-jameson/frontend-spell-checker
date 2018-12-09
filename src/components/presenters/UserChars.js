import React, { Fragment, Component } from 'react'
import { Menu, Grid } from 'semantic-ui-react'

import CharMenuItem from './CharMenuItem'
import CharCard from './CharCard'
import CreateChar from '../containers/CreateChar'


class UserChars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Will be set to undefined, then the full char object
      activeItem: this.props.chars[0] ? this.props.chars[0].name : undefined
    }
  }

  findActiveChar = () => {
    return this.props.chars.find(char => {
      return char.name === this.state.activeItem
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Fragment>
        <Grid.Row
         columns={2}>
          <Grid.Column>
            <Menu vertical tabular compact>
              {this.props.chars.map((char, ind) => {
                return <CharMenuItem
                  char={char}
                  activeItem={activeItem}
                  itemClick={this.handleItemClick}
                  key={ind}
                />
              })}
              <Menu.Item>
                <CreateChar />
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            {this.state.activeItem === undefined ? null :
              <CharCard char={this.findActiveChar()}/>
            }
          </Grid.Column>
        </Grid.Row>

      </Fragment>
    )
  }
}

export default UserChars
