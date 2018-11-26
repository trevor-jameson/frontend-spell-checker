import React, { Component } from 'react'
import { adapter } from '../../Adapter'
import { Button, Form, Grid, Column, Header, Modal } from 'semantic-ui-react'
import './CreateChar.css'

export default class CreateChar extends Component {
  constructor() {
    super()
    this.state = {
    name: '',
    class: '',
    level: '',
    abilities: {
      str: 0,
      dex: 0,
      con: 0,
      wis: 0,
      int: 0,
      cha: 0
    },
    pic: ''
    }
  }

  setChange = event => {
    this.setState({[event.target.placeholder]: event.target.value})
  }


  submitForm = (event) => {
    event.preventDefault()

    // Method not yet defined
    adapter.createChar({
      char: {
        name: this.state.name,
        class: this.state.class,
        level: this.state.level,
        abilities: this.state.abilities,
        pic: this.state.pic
      }
    })
    .then(json => {
      if (json !== undefined) {

        window.sessionStorage.setItem('jwt', json['jwt'])

        // TODO: Set the user attributes in Redux instead
        window.sessionStorage.setItem('user', JSON.stringify(json['user']))

        // redirect to '/spells'
        window.location.href = 'http://localhost:3000/characters'
      } else {
        // TODO: How to handle error messages from backend?
        alert('All fields must be filled')
      }
    })
    // End of SubmitForm
  }

  render() {
    return(
      <div id="create-char-page">
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as='h2' textAlign='center'>
            Create your new character
          </Header>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>Class</label>
              <input
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>Level</label>
              <input
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>Ability Scores</label>
              <input
              type='password'
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>Password Confirmation</label>
              <input
              type='password_conf'
              onChange={this.setChange}/>
            </Form.Field>

            <Form.Field>
              <label>Profile Picture</label>
              <input
              placeholder="Optional Link"
              onChange={this.setChange}/>
            </Form.Field>

            <Button
            type='submit'
            onClick={this.submitForm}>
            Submit</Button>
          </Form>

          <div id="create-char-option">
          <br/>
            <Link to="/login">Already have a profile? Head back to the login page!</Link>
          </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
