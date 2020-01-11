import React, { Fragment } from 'react'
import { Button, Divider } from 'semantic-ui-react'

const WelcomeOptions = (props) => {
    return (
        <>
        <Button 
            name="login" 
            onClick={props.changeActiveModal} 
            primary fluid>
            Login
        </Button>

        <Divider horizontal> Or</Divider>

        <Button 
            name="signup" 
            onClick={props.changeActiveModal} 
            primary fluid>
            Create New Account
        </Button>
      </>
    )
}

export default WelcomeOptions