import React, { Component } from 'react'
import { Menu, Image, Icon, Header, Button, Modal, Statistic } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../images/SpellCheckLogo.png'

class NavBar extends Component {
  // TODO: Refactor Menu component to use SideBar instead
  // Calculates the hours remaining until the Mod 5 code freeze
   codeFreeze = () => {
    const codeFreeze = Date.parse('December 5, 2018 14:00:00')
    const remainingTime = codeFreeze - Date.parse(new Date())
    if (remainingTime <= 0) {
      return <iframe src="https://giphy.com/embed/T08JhumnpKAI8" width="180" height="150" ></iframe>
    }
      let remainingHours = Math.round(remainingTime / 1000 / 60 / 60)
      return <p>{remainingHours} Hours until code freeze</p>
  }

    render() {

      return (
        <Menu
        fixed='left'
        inverted={true}
        vertical={true}
        >

        <Menu.Item>
        <Image
        src={logo}
        size='small'
        alt='The Spell Checker Logo'
        />
        </Menu.Item>

        <Menu.Item>
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
        <Link to='/roller'>
        <Icon name='modx' /> Dice Roller
        </Link>
        </Menu.Item>

        <Menu.Item>
        <Link to='/sessions'>
        <Icon name='trophy' /> Sessions
        </Link>
        </Menu.Item>

        <Menu.Item>
        <Link to='/chat'>
        <Icon name='wechat'/> Group Chat
        </Link>
        </Menu.Item>

        <Menu.Item>
        <Link to='/store'>
        <Icon name='bar' /> Game Store
        </Link>
        </Menu.Item>

        <Menu.Item>
        {/* The Button styling differs from Links, need to group them to appear similar */}
        <Modal trigger={<Button floated='left' inverted basic><Icon name='sign out alternate'/> Logout</Button>}
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
        <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
        </Button>
        </Modal.Actions>
        </Modal>
        </Menu.Item>

        <Menu.Item>
        <br/>
        <br/>
          {this.codeFreeze()}
        </Menu.Item>

        </Menu>
      )
    }
  }

export default NavBar
