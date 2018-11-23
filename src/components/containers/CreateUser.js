import React, {Component} from 'react'
import { adapter } from '../../Adapter'
import { Button, Form } from 'semantic-ui-react'
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

        <Form>

          <h2> Create User </h2>
          <Form.Field>
            <label>Username</label>
            <input
            placeholder='username'
            onChange={this.setChange}/>
          </Form.Field>

          <Form.Field>
            <label>First Name</label>
            <input
            placeholder='firstname'
            onChange={this.setChange}/>
          </Form.Field>

          <Form.Field>
            <label>Last Name</label>
            <input
            placeholder='lastname'
            onChange={this.setChange}/>
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
            placeholder='password'
            type='password'
            onChange={this.setChange}/>
          </Form.Field>

          <Form.Field>
            <label>Link to Profile Picture</label>
            <input
            placeholder='pic'
            onChange={this.setChange}/>
          </Form.Field>

          <Button
          type='submit'
          onClick={this.submitForm}>
          Submit</Button>

        </Form>

        <div id="login-user-option">
          <Link to="/login">Already have a profile? Head back to the login page!</Link>
        </div>
      </div>
    )
  }
}
