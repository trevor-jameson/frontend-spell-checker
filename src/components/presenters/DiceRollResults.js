import React, { Fragment } from 'react'
import { Image } from 'semantic-ui-react'

import diceCutout from '../../images/stuck-d20-cutout.png'
import './DiceRollResults.css'

const DiceRollResults = props => {
    return (
      <>
        <div id="dice-cutout">
          <Image
          src={diceCutout}
          size='medium'
          />
          <p id='roll-result'>
            {props.result}
          </p>
        </div>
      </>
    )
  }

export default DiceRollResults
