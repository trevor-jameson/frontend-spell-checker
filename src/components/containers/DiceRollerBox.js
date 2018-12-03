import React, { Fragment, Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

import NavBar from '../presenters/NavBar'
import adapter from '../../utils/Adapter'
import dice from '../../utils/DiceRoller'
import DiceRollingInterface from '../presenters/DiceRollingInterface'

class DiceRollerBox extends Component {
  constructor() {
    super()
    this.state = {
      resultList: {},
      result: 0,
      dice: 1,
      times: 1
    }
  }

  rollTheDice = () => {
    const result = dice.roll(this.state.times, this.state.sides)
    // Also need to set to result list

    this.setState({result: result})
  }

  render() {
    return (
      <>
        <Grid>
          <Grid.Column floated={'right'} width={10}>
            <DiceRollingInterface result={this.state.result} roll={this.rollTheDice} />
          </Grid.Column>
        </Grid>
      </>
    )
  }
}


export default DiceRollerBox
