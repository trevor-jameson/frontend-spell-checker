import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../images/SpellCheckLogo.png'

const NavBar = () => {
    return(
      <Menu fixed='left'
      inverted={true}
      vertical={true}
      >

        <Menu.Item>
          <Image src={logo}
          size='small'
          alt='The Spell Checker Logo'/>
        </Menu.Item>

        <Menu.Item>
          <Link to='/spells'>
            Spells
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to='/characters'>
            Characters
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to='/sessions'>
            Sessions
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to='/logout'>
            Logout
          </Link>
        </Menu.Item>

      </Menu>
    )
  }

export default NavBar
