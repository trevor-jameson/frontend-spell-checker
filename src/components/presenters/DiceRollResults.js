import React, { Fragment } from 'react'
import { Image } from 'semantic-ui-react'

import diceCutout from '../../images/stuck-d20-cutout.png'
import './DiceRollResults.css'

const DiceRollResults = props => {
    return (
      <Fragment>
        <div id="dice-cutout">
          <Image
          src={diceCutout}
          size='medium'
          />
          <p id='roll-result'>
            {isNaN(props.result) ? 0 : props.result}
          </p>
        </div>
      </Fragment>
    )
  }

export default DiceRollResults
