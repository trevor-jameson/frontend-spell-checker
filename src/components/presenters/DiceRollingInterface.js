import React, { Component, Fragment } from 'react'
import { Image, Button, Form } from 'semantic-ui-react'

import './DiceRollingInterface.css'
import diceCutout from '../../images/stuck-d20-cutout.png'

class DiceRollingInterface extends Component {
  render() {
    return (
      <>
        <div id="dice-cutout">
          <Image
          src={diceCutout}
          size='small'
          />
          <p className='roll-result'>
            {this.props.result}
          </p>
        </div>

      
      </>
    )
  }
}

export default DiceRollingInterface
