import React, { Fragment, Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

import adapter from '../../utils/Adapter'
import dice from '../../utils/DiceRoller'
import DiceRollingInterface from '../presenters/DiceRollingInterface'
import DiceRollResults from '../presenters/DiceRollResults'

class DiceRollerBox extends Component {
  constructor() {
    super()
    this.state = {
      resultList: {},
      result: 0,
    }
  }

  rollTheDice = (form) => {
    const { adv, disadv, sides, times } = form
    let result

    if (adv) {
      result = dice.rollAdvantage(times, sides)
    } else if (disadv) {
      result = dice.rollDisadvantage(times, sides)
    } else {
      result = dice.roll(times, sides)
    }
    debugger


    // TODO: Set the result list

    this.setState({result: result})
  }

  render() {
    return (
      <>
        <Grid>
          <Grid.Column  width={10}>
            <Grid.Row centered>
              <DiceRollResults result={this.state.result} resultList={this.state.resultList} />
            </Grid.Row>
            <Grid.Row centered>
              <DiceRollingInterface rollTheDice={this.rollTheDice} />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}


export default DiceRollerBox
