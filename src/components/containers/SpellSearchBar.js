import React from 'react'
import { Input, Form, Button, Checkbox } from 'semantic-ui-react'

import options from '../../utils/GameOptions'

const SpellSearchBar = (props) => (
  <Form
    onSubmit={props.onClickSearch}
  >
    <Form.Input
      type="text"
      placeholder="Search"
      action={
        <Button
          icon='search'
          type="submit"
        />
      }
    />
    <Form.Group widths='equal'>
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
    <Form.Input
      label='School'
    />
    <Form.Checkbox toggle
      label='Concentrate?'
    />
    </Form.Group>
  </Form>
);

export default SpellSearchBar
