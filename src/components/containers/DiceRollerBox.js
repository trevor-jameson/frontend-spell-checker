import React, { Fragment, Component } from 'react'
import { Grid } from 'semantic-ui-react'

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
      <Fragment>
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
      </Fragment>
    )
  }
}


export default DiceRollerBox
