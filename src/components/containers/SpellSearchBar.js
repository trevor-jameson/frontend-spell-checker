import React, { Component } from 'react'
import { Input, Form, Button, Checkbox } from 'semantic-ui-react'

import options from '../../utils/GameOptions'

class SpellSearchBar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      klasses: null,
      level: null,
      school: null,
      concen: null
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onChangeDropdown = (event) => {
    const dropdown = event.target.parentElement.parentElement
    this.setState({[dropdown.id]: event.target.innerText.toLowerCase()})
  }

  onChangeToggle = (event) => {
    this.setState({[event.target.id]: event.target.checked})
  }

  submitSearch = (event) => {
    event.preventDefault()
    this.props.onSubmitSearch(this.state)
  }

  render() {
    debugger
    return (
      <Form
        onSubmit={this.submitSearch}
      >
      <Form.Input
      name='name'
      type="name"
      placeholder="Search"
      onChange={this.onChange}
      action={
        <Button
        icon='search'
        type="submit"
        />
      }
      />
      <Form.Group widths='equal'>
      <Form.Dropdown fluid search selection
        id='klasses'
        label='Class'
        placeholder='Select Class'
        options={options.classOptions}
        onChange={this.onChangeDropdown}
      />
      <Form.Dropdown selection compact search
        id='level'
        label='Level'
        placeholder='Select Level'
        options={options.levelOptions}
        onChange={this.onChangeDropdown}
      />
      <Form.Input
        name='school'
        label='School'
        onChange={this.onChange}
      />
      <Form.Checkbox toggle
        id='concen'
        label='Concentrate?'
        onChange={this.onChangeToggle}
      />
      </Form.Group>
      </Form>
    )
  }
}

export default SpellSearchBar
