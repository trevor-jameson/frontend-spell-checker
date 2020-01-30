import React from 'react'
import {Modal, Menu, Icon, Header, Button} from 'semantic-ui-react'
import adapter from '../../utils/Adapter'

 const Logout = () => {
     return(

    <Modal trigger={
    <Menu.Item>
        <Icon name="log out" /> Logout
          </Menu.Item>
}
    basic
    size='small'
>
    <Header icon='cog' content="Logout of Spell Check?" />
    <Modal.Content>
        <p>
            Are you sure you want to log out of SpellChecker? Is something wrong with you?!
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
     )
}

export default Logout