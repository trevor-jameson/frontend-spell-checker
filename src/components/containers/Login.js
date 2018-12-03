import React, {Component} from 'react'
import adapter from '../../Adapter'
import { Link } from 'react-router-dom'
import './Login.css'
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react'

export default class Login extends Component {
  constructor() {
    super()

    // State of password and username vars should be limited to the login form
    this.state = {
    username: '',
    password: ''
    }
  }

  setChange = event => {
    this.setState({[event.target.placeholder]: event.target.value})
  }

  submitForm = (event) => {
    event.preventDefault()
    adapter.loginUser({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(json => {
      if (json !== undefined) {

        window.sessionStorage.setItem('jwt', json['jwt'])

        // TODO: Set the user attributes in Redux instead?
        window.sessionStorage.setItem('username', json.user.username)
        window.sessionStorage.setItem('firstname', json.user.firstname)
        window.sessionStorage.setItem('pic', json.user.pic)

        // redirect to '/homepage'
        window.location.href = 'http://localhost:3000/spells'
      } else {
        alert('Invalid Login Credentials')
      }
    })
  }

  render() {
    // TODO: If user has authenticated JWT, redirect to spells page
    return(
      <div id="login-page">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header
            as='h2'
            id='page-header'
            textAlign='center'>
              Login to your account
              </Header>
                <Form size='large'>
                  <Form.Field>
                    <label>Username </label>
                    <input
                    placeholder='username'
                    onChange={this.setChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Password </label>
                    <input
                    placeholder='password'
                    type='password'
                    onChange={this.setChange}/>
                  </Form.Field>
                  <Button
                  type='submit'
                  onClick={this.submitForm}>
                  Submit</Button>
                </Form>
                <div id="create-user-option">
                <br/>
                  <Message compact
                  size='mini'
                  color='black'>
                    <Link to="/create-user">
                      New to Spell Checker? Create a profile and get playing!
                    </Link>
                  </Message>
                </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
