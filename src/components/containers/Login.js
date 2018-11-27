import React, {Component} from 'react'
import { adapter } from '../../Adapter'
import { Link } from 'react-router-dom'
import './Login.css'
import { Button, Form, Grid, Header } from 'semantic-ui-react'

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

        // TODO: Set the user attributes in Redux instead
        window.sessionStorage.setItem('user', JSON.stringify(json['user']))

        // redirect to '/'
        window.location.href = 'http://localhost:3000/homepage'
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
          <Grid.Column style={{ maxWidth: 550 }}>
            <Header as='h2' color='#8B0000' textAlign='center'>
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
                  <Link to="/create-user">New to Spell Check? Create a new profile and get playing!</Link>
                </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
