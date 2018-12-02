import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import NavBar from '../presenters/NavBar'
import CreateChar from './CreateChar'
import { adapter }from '../../Adapter'
import { fetchingChars } from '../../redux/actions/charActions'

class CharacterSelectionBox extends Component {

  componentDidMount() {
    this.props.fetchingChars()
  }

  render() {
    return (
      <>
        <Grid columns={2}>
          <Grid.Row>
            <NavBar />
          </Grid.Row>
            <Grid.Column/>
            <Grid.Column floated={'right'} width={10}>
            </Grid.Column>
        </Grid>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingChars: () => {dispatch(fetchingChars())}
  }
}

export default connect(null, mapDispatchToProps)(CharacterSelectionBox)
