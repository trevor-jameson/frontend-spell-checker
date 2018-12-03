import React, { Component } from 'react'
import { Menu, Image, Icon, Header, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../images/SpellCheckerLogo.png'
import adapter from '../../Adapter'
import { connect } from 'react-redux'
import { mapPageToProps } from '../../redux/mapStateToProps'
import { setActivePage } from '../../redux/actions/menuActions'
import codeFreeze from '../../utils/CodeFreeze'
import './NavBar.css'

class NavBar extends Component {

  setPage = (event) => {
    const page = event.currentTarget.id
    setActivePage(page)
  }


    render() {
      return (
        <Menu
        inverted={true}
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
          active={this.props.activePage === 'spells'}
          onClick={this.setPage}
          id="spells"
        >
          <Link to='/spells'>
          <Icon name='bolt' /> Spells
          </Link>
        </Menu.Item>

        <Menu.Item
          active={this.props.activePage === 'characters'}
          onClick={this.setPage}
          id="characters"
        >
          <Link to='/characters'>
          <Icon name='universal access'/> Characters
          </Link>
        </Menu.Item>

        <Menu.Item
          active={this.props.activePage === 'dice'}
          onClick={this.setPage}
        >
          <Link to='/dice'>
          <Icon name='modx' /> Dice Roller
          </Link>
        </Menu.Item>

        <Menu.Item active={this.props.activePage === 'sessions'}>
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
          <Button basic color='red' inverted>
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
          {window.sessionStorage.username}
        </Menu.Item>

        </Menu>
      )
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      setActivePage: (page) => {dispatch(setActivePage(page))}
    }
  }

export default connect(mapPageToProps, mapDispatchToProps)(NavBar)
