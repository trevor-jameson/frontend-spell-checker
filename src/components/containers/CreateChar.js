import React, { Component } from 'react'
import { Button, Form, Grid, Column, Header, Modal, Checkbox, Divider } from 'semantic-ui-react'

import dice from '../../utils/DiceRoller'
import adapter from '../../utils/Adapter'
import options from '../../utils/GameOptions'

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
        // Dispatch update with new character data
      } else {
        // TODO: How to handle error messages from backend?
        alert('There was an error with your character creation')
      }
    })
    // End of SubmitForm
  }

  render() {
    return(
      <Modal trigger={<Button>Create Character</Button>}>
        <div id="create-char-page">
        <Grid textAlign="center" style={{ height: '100%' }}>
          <Grid.Column style={{ maxWidth: 550 }}>
            <Header as='h2' textAlign='center'>
              Create your new character
            </Header>
            <Form>
              <Form.Field
                label='Name'
                control='input'
                onChange={this.setChange}
              />
              <Form.Group>
                <Form.Dropdown fluid search selection
                  label='Class'
                  placeholder='Select Class'
                  options={options.classOptions}
                />

                <Form.Dropdown selection compact search
                  label='Level'
                  placeholder='Select Level'
                  options={options.options20}
                />
              </Form.Group>

              <Form.Group centered>
                <Grid columns={2}>
                  <Grid.Column>

                  <Form.Dropdown selection compact search
                    label='Str'
                    placeholder='Strength'
                    options={options.options20}
                  />

                  <Form.Dropdown selection compact search
                    label='Dex'
                    placeholder='Dexterity'
                    options={options.options20}
                  />

                  <Form.Dropdown selection compact search
                    label='Con'
                    placeholder='Constitution'
                    options={options.options20}
                  />
                  </Grid.Column>
                  <Divider vertical></Divider>
                  <Grid.Column>

                  <Form.Dropdown selection compact search
                    label='Int'
                    placeholder='Intelligence'
                    options={options.options20}
                  />

                  <Form.Dropdown selection compact search
                    label='Wis'
                    placeholder='Wisdom'
                    options={options.options20}
                  />

                  <Form.Dropdown selection compact search
                    label='Cha'
                    placeholder='Charisma'
                    options={options.options20}
                  />
                  </Grid.Column>
                </Grid>
              </Form.Group>

              <Form.Field compact
                label='Character Pic'
                placeholder="Optional Link"
                control='input'
                onChange={this.setChange}
              />

              <Form.Field
                control={Checkbox}
                label='I agree to bring this character to life'
              />

              <Button
              type='submit'
              onClick={this.submitForm}>
              Submit</Button>
            </Form>

            </Grid.Column>
          </Grid>
        </div>
      </Modal>
    )
  }
}
