import React, { Component } from 'react'
import { Image, Button } from 'semantic-ui-react'

import './DiceRollingInterface.css'
import diceCutout from '../../images/stuck-d20-cutout.png'

const DiceRollingInterface = (props) => {
  debugger
  return (
    <div id="dice-cutout">
      <Image
        src={diceCutout}
        size='small'
      />
      <p className='roll-result'>
        {props.result}
      </p>
      <Button/>
    </div>
  )
}

export default DiceRollingInterface
