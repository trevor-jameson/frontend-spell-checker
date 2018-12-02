import React, {Component} from 'react'
import { adapter } from '../../Adapter'
import { Button, Form, Grid, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './CreateUser.css'

export default class CreateUser extends Component {
  constructor() {
    super()

    // State of password and username vars should be limited to the login form
    this.state = {
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    password_conf: '',
    pic: ''
    }
  }

  setChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }


  submitForm = (event) => {
    event.preventDefault()
    if (this.state.password_conf !== this.state.password) {
       alert('Your passwords must match')
       return
    }
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
        // TODO: How to handle error messages from backend?
        alert('Invalid User Credentials')
      }
    })
    // End of SubmitForm
  }

  render() {
    return(
        <div id="create-user-page">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 300 }}>
            <Header
            as='h2'
            textAlign='center'
            className=''>
              Create your account
            </Header>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input
                name='username'
                onChange={this.setChange}/>
              </Form.Field>

              <Form.Field>
                <label>First Name</label>
                <input
                name='firstname'
                onChange={this.setChange}/>
              </Form.Field>

              <Form.Field>
                <label>Last Name</label>
                <input
                name='lastname'
                onChange={this.setChange}/>
              </Form.Field>

              <Form.Field>
                <label>Password</label>
                <input
                name='password'
                type='password'
                onChange={this.setChange}/>
              </Form.Field>

              <Form.Field>
                <label>Password Confirmation</label>
                <input
                name='password_conf'
                type='password'
                onChange={this.setChange}/>
              </Form.Field>

              <Form.Field>
                <label>Profile Picture</label>
                <input
                name='pic'
                placeholder="link"
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
