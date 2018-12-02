import React, { Component } from 'react'
import { Menu, Image, Icon, Header, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../images/SpellCheckLogo.png'
import adapter from '../../Adapter'
import { connect } from 'react-redux'
import { mapPageToProps } from '../../redux/mapStateToProps'
import { setActivePage } from '../../redux/actions/menuActions'
import './NavBar.css'

class NavBar extends Component {


  // TODO: Refactor Menu component to use SideBar instead
  // Calculates the hours remaining until the Mod 5 code freeze
  //  codeFreeze = () => {
  //   const codeFreeze = Date.parse('December 5, 2018 14:00:00')
  //   const remainingTime = codeFreeze - Date.parse(new Date())
  //   if (remainingTime <= 0) {
  //     return <iframe src="https://giphy.com/embed/T08JhumnpKAI8" width="180" height="150" ></iframe>
  //   }
  //     let remainingHours = Math.round(remainingTime / 1000 / 60 / 60)
  //     return <p>{remainingHours} Hours until code freeze</p>
  // }

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
        spaced='right'
        alt='The Spell Checker Logo'
        />
        </Menu.Item>

        <Menu.Item
          active={true}
        >
          <Link to='/spells'>
          <Icon name='bolt' /> Spells
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to='/characters'>
          <Icon name='universal access'/> Characters
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to='/dice'>
          <Icon name='modx' /> Dice Roller
          </Link>
        </Menu.Item>

        <Menu.Item>
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
          onClick={adapter.logout}
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
          size='mini'
          alt="Your user profile photo"
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
