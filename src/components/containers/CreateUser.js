import React, {Component} from 'react'
import { adapter } from '../../Adapter'
import { Button, Form, Grid, Column, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor() {
    super()

    // State of password and username vars should be limited to the login form
    this.state = {
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    pic: ''
    }
  }

  setChange = event => {
    this.setState({[event.target.placeholder]: event.target.value})
  }

  submitForm = (event) => {
    event.preventDefault()
    adapter.createUser({
      user: {
        username: this.state.username,
        firstname: this.state.firstname,
        lastname: this.statelastname,
        password: this.state.password,
        pic: this.state.pic
      }
    })
    .then(json => {
      if (json !== undefined) {

        window.sessionStorage.setItem('jwt', json['jwt'])

        // TODO: Set the user attributes in Redux instead
        window.sessionStorage.setItem('user', JSON.stringify(json['user']))

        // redirect to '/spells'
        window.location.href = 'http://localhost:3000/spells'
      } else {
        alert('Invalid User Credentials')
      }
    })
  }

  render() {
    return(
      <div id="create-user-page">
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as='h2' color='#8B0000' textAlign='center'>
            Create your account
          </Header>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>First Name</label>
              <input
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>Last Name</label>
              <input
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
              type='password'
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>Profile Picture</label>
              <input
              placeholder="Link"
              onChange={this.setChange}/>
            </Form.Field>

            <Button
            type='submit'
            onClick={this.submitForm}>
            Submit</Button>
          </Form>

          <div id="login-user-option">
          <br/>
            <Link to="/login">Already have a profile? Head back to the login page!</Link>
          </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
