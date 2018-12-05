import React, { Component } from 'react'
import { Menu, Image, Icon, Header, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../images/SpellCheckerLogo.png'
import adapter from '../../utils/Adapter'
import codeFreeze from '../../utils/CodeFreeze'
import './NavBar.css'

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
        >
          <Link to='/spells'>
          <Icon name='bolt' /> Spells
          </Link>
        </Menu.Item>

        <Menu.Item
          name="characters"
          active={activePage === 'characters'}
          onClick={this.setPage}
        >
          <Link to='/characters'>
          <Icon name='universal access'/> Characters
          </Link>
        </Menu.Item>

        <Menu.Item
          name="dice"
          active={activePage === 'dice'}
          onClick={this.setPage}
        >
          <Link to='/dice'>
          <Icon name='modx' /> Dice Roller
          </Link>
        </Menu.Item>

        <Menu.Item
          name="sessions"
          active={activePage === 'sessions'}
          onClick={this.setPage}
        >
          <Link to='/sessions'>
          <Icon name='trophy' /> Sessions
          </Link>
        </Menu.Item>

        <Modal trigger={
          <Menu.Item>
            <Icon name="log out"/> Logout
          </Menu.Item>
          }
          basic
          size='small'
          >
          <Header icon='cog' content="Logout of Spell Check?" />
          <Modal.Content>
            <p>
              Are you sure you want to log out of SpellCheck? Is something wrong with you?!
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic inverted
            color='red'>
              <Icon name='remove' /> No
            </Button>

            <Button
              color='green'
              inverted
              onClick={adapter.logoutUser}
            >
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>

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
