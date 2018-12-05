import React from 'react'
import { Menu } from 'semantic-ui-react'

const CharCard = props => {
  const { char, activeItem } = props

  return (
    <Menu.Item
      name={props.char.name}
      active={props.activeItem === props.char.name}
      onClick={props.itemClick}
    >
      {char.name}
    </Menu.Item>
  )
}

export default CharCard
