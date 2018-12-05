import React, { Component, Fragment } from 'react'
import { Button, Form, Label } from 'semantic-ui-react'

class DiceRollingInterface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sides: null,
      times: null,
      adv: null,
      disadv: null
    }
  }

  onChangeNum = (event) => {
    const targ = event.target

    if (Number(targ.value)) {
      const num = Number(targ.value)
      this.setState({[targ.name]: num})
    } else {
      console.log(targ.name, `must be a number`)
    }
  }

  onChangeCheckbox = (event) => {
    const checkbox = event.target.parentElement.firstElementChild

    // Change in checkbox state not made until after this event is passed, meaning
    // that checked value must be reversed
    this.setState({[checkbox.name]: !(checkbox.checked)})
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.rollTheDice(this.state)
  }

  render() {
    return (
        <>
          <Form
            widths='equal'
            className='dice-roll-form'
            onSubmit={this.onSubmit}
          >
          <Form.Group>
            <Form.Input fluid
              name='times'
              label='Times'
              onChange={this.onChangeNum}
            />
            <div id='this-app-is-brought-to-you-by-the-letter-d'>d</div>
            <Form.Input fluid
              name='sides'
              label='Sides'
              onChange={this.onChangeNum}
            />
          </Form.Group>

          <Form.Group>
            <Form.Checkbox
              name='adv'
              label='Advantage'
              disabled={(this.state.disadv)}
              onChange={this.onChangeCheckbox}
            />
            <Form.Checkbox
              name='disadv'
              label='Disadvantage'
              disabled={(this.state.adv)}
              onChange={this.onChangeCheckbox}
            />
          </Form.Group>
          <Button circular
            name='roll'
            placeholder='Roll'
            type='submit'
            content='Roll'
          />
          </Form>
        </>
      )
    }
  }

export default DiceRollingInterface
