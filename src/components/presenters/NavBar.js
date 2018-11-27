import React from 'react'
import { Menu, Image, Icon, Header, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../images/SpellCheckLogo.png'

const NavBar = () => {
    return(
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

      </Menu>
    )
  }

export default NavBar
