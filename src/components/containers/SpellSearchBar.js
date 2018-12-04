import React from 'react'
import { Input, Form, Button, Checkbox } from 'semantic-ui-react'

import options from '../../utils/GameOptions'

const SpellSearchBar = (props) => (
  <Form
    onSubmit={props.onClickSearch}
  >
    <Form.Input
      name='text'
      type="text"
      placeholder="Search"
      onChange={props.onChange}
      action={
        <Button
          icon='search'
          type="submit"
        />
      }
    />
    <Form.Group widths='equal'>
      <Form.Dropdown fluid search selection
        name='klass'
        label='Class'
        placeholder='Select Class'
        options={options.classOptions}
        onChange={props.onChange}
      />
      <Form.Dropdown selection compact search
        name='level'
        label='Level'
        placeholder='Select Level'
        options={options.options20}
        onChange={props.onChange}
      />
      <Form.Input
        name='school'
        label='School'
        onChange={props.onChange}
      />
      <Form.Checkbox toggle
        name='concen'
        label='Concentrate?'
        onChange={props.onChange}
      />
    </Form.Group>
  </Form>
);

export default SpellSearchBar
