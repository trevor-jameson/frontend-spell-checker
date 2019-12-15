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
    .catch(error => {
      error.then(res => this.setState({error: res.message}))
    })
  }

  render() {
    // TODO: If user has authenticated JWT, redirect to spells page
    return(
      <div id="login-page">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Grid.Row color="black">
              <Header
              as='h2'
              id='page-header'
              textAlign='center'>
                Login to your account
                </Header>
                  <Form size='large'>
                    <Form.Field>
                      <input
                      placeholder='username'
                      onChange={this.setChange}/>
                    </Form.Field>
                    <Form.Field>
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

                      <Link to="/signup">
                        New to Spell Checker?
                      </Link>
                  {!this.state.error ? null :
                    <Message compact
                      size='mini'
                      color='black'>
                        {this.state.error}
                    </Message>
                  }
              </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
