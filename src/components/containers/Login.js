import React, {Component} from 'react'
import Adapter from '../../Adapter'
import { Button, Form } from 'semantic-ui-react'

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
    const adapter = new Adapter('http://localhost:3001')
    adapter.loginUser({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(json => {
      if (json !== undefined) {
        window.localStorage.setItem('jwt', json['jwt'])

        // TODO: Set the user attributes in Redux instead
        window.localStorage.setItem('currentUser', json['user'])

        // redirect to '/'
        window.location.href = 'http://localhost:3001/'
      } else {
        alert('CRITICAL LOGIN FAILURE!')
      }
    })
  }

  render() {
    return(
      <div id="login-page">
        <Form>
          <h2> Login </h2>
          <Form.Field>
            <label>Username</label>
            <input
            placeholder='username'
            onChange={this.setChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
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
      </div>
    )
  }
}
