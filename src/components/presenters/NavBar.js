import React, { Component } from 'react'
import { Menu, Image, Icon, Header, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../images/SpellCheckerLogo.png'
import adapter from '../../utils/Adapter'
import './NavBar.css'
import Logout from './Logout'

class NavBar extends Component {

  state = { activePage: null}

  setPage = (e, { name }) => this.setState({ activePage: name })


    render() {
      const { activePage } = this.state

      return (
        <Menu inverted
        widths={8}
        className='navbar'
        >

        <Menu.Item>
        <Image rounded
          src={logo}
          size='small'
          alt='The Spell Checker Logo'
          className='logo'
        />
        </Menu.Item>

        <Menu.Item
          name="spells"
          active={activePage === 'spells'}
          onClick={this.setPage}
          as={Link}
          to='/spells'
        >
          <Icon name='bolt' /> Spells
        </Menu.Item>

        <Menu.Item
          name="characters"
          active={activePage === 'characters'}
          onClick={this.setPage}
          as={Link}
          to='/characters'
        >
          <Icon name='universal access'/> Characters
        </Menu.Item>

        <Menu.Item
          name="dice"
          active={activePage === 'dice'}
          onClick={this.setPage}
          as={Link}
          to='/dice'
        >
          <Icon name='modx' /> Dice Roller
        </Menu.Item>

        <Menu.Item
          name="sessions"
          active={activePage === 'sessions'}
          onClick={this.setPage}
          as={Link}
          to='/sessions'
        >
          <Icon name='trophy' /> Sessions
        </Menu.Item>

        <Logout />

        <Menu.Item>
          <Image
          src={window.sessionStorage.pic}
          spaced='right'
          circular
          size='tiny'
          alt="Your user profile photo"
          id='profile-pic'
          />
          {window.sessionStorage.firstname}
        </Menu.Item>

        </Menu>
      )
    }
  }

export default NavBar
