import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

import options from '../../utils/GameOptions'

class SpellSearchBar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      klasses: null,
      lvl: null,
      school: null,
      concentration: null
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onChangeDropdown = (event) => {
    const dropdown = event.target.parentElement.parentElement
    let val = event.target.innerText

    // innerText is always a string, but search function expects ints for lvls
    if (val.match(/\d+/)) {
      val = Number(val)
    }
    this.setState({[dropdown.id]: val})
  }

  onChangeToggle = (event) => {
    this.setState({[event.target.id]: event.target.checked})
  }

  submitSearch = (event) => {
    event.preventDefault()
    this.props.onSubmitSearch(this.state)
  }

  render() {
    return (
      <Form
        onSubmit={this.submitSearch}
      >
      <Form.Input
      name='name'
      type="text"
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
        options={options.spellClassOptions}
        onChange={this.onChangeDropdown}
      />
      <Form.Dropdown selection compact search
        id='lvl'
        label='Level'
        placeholder='Select Level'
        options={options.spellLevelOptions}
        onChange={this.onChangeDropdown}
      />
      <Form.Dropdown selection compact search
        id='school'
        label='School'
        placeholder='Select School'
        onChange={this.onChangeDropdown}
        options={options.spellSchoolOptions}
      />
      <Form.Checkbox toggle
        id='concentration'
        label='Concentration'
        onChange={this.onChangeToggle}
      />
      </Form.Group>
      </Form>
    )
  }
}

export default SpellSearchBar
