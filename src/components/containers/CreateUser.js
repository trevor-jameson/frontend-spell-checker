import React, {Component} from 'react'
import adapter from '../../utils/Adapter'
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react'
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
    pic: '',
    error: ''
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
    .catch(error => {
      error.json().then(res => {
        this.setState({error: res.message})
      })
    })
    // End of SubmitForm
  }

  render() {
    return (
      <div id="signup-page">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
          centered
          columns={2}
        >
          <Grid.Column id="signup-container">
            <Header as="h1" textAlign="center" id="signup-header">
              Create your account
            </Header>
            <Form>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Username</label>
                  <input 
                    name="username" 
                    autoComplete="username"
                    onChange={this.setChange} />
                </Form.Field>

                <Form.Field>
                  <label>Profile Picture URL</label>
                  <input
                    name="pic"
                    placeholder="link"
                    onChange={this.setChange}
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Field>
                  <label>First Name</label>
                  <input 
                    name="firstname" 
                    autoComplete="firstname"
                    onChange={this.setChange} />
                </Form.Field>

                <Form.Field>
                  <label>Last Name</label>
                  <input
                    name="lastname"
                    autoComplete="lastname"
                    onChange={this.setChange}
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Field>
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    onChange={this.setChange}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Password Confirmation</label>
                  <input
                    name="password_conf"
                    type="password"
                    autoComplete="new-password"
                    onChange={this.setChange}
                  />
                </Form.Field>
              </Form.Group>

              <Button type="submit" onClick={this.submitForm}>
                Submit
              </Button>
            </Form>

            <div id="login-user-option">
              <br />
              <Message compact size="large" color="black">
                <Link to="/login">Already have an account? Login!</Link>
              </Message>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
