import React, {Component} from 'react'
import adapter from '../../utils/Adapter'
import { Link } from 'react-router-dom'
import './Login.css'
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react'

export default class Login extends Component {

  // State of password and username vars should be limited to the login form
  state = {
    username: '',
    password: '',
    error: ''
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
    .then(userData => {
        window.sessionStorage.setItem('jwt', userData['jwt'])

        // TODO: Set the user attributes in Redux instead?
        window.sessionStorage.setItem('username', userData.user.username)
        window.sessionStorage.setItem('firstname', userData.user.firstname)
        window.sessionStorage.setItem('pic', userData.user.pic)

        // redirect to '/homepage'
        window.location.href = adapter.FRONTEND_URL + '/spells'
    })
    .catch(error => {
      error.json().then(res => this.setState({error: res.message}))
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
                {!this.state.error ? null :
                  <Message compact
                    size='mini'
                    color='black'>
                      {this.state.error}
                  </Message>
                }
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
