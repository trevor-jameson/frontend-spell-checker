import React, { Fragement } from 'react'
import { Menu } from 'semantic-ui-react'

const CharMenuItem = props => {
  const { char, activeItem, itemClick } = props

  return (
    <>
    <Menu.Item
      name={char.name}
      active={activeItem === char.name}
      onClick={itemClick}
    >
      {char.name}
    </Menu.Item>
    </>
  )
}

export default CharMenuItem
