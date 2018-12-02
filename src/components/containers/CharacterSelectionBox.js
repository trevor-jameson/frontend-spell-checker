import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import NavBar from '../presenters/NavBar'
import CreateChar from './CreateChar'
import adapter from '../../Adapter'
import loading from '../presenters/LoadingScreen'
import { fetchingChars } from '../../redux/actions/charActions'
import { mapCharsToProps } from '../../redux/mapStateToProps'

class CharacterSelectionBox extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     isLoadingChars: true,
  //     chars: []
  //   }
  // }

  componentDidMount() {
    this.props.fetchingChars()
  }

  render() {
    return (
      <>
        <Grid>
          <Grid.Row>
            <NavBar />
          </Grid.Row>
          <Grid.Row>
            {this.props.isLoadingChars ? loading :
              <Grid.Column floated={'right'} width={10}>

              </Grid.Column>
            }
          </Grid.Row>
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

export default connect(mapCharsToProps, mapDispatchToProps)(CharacterSelectionBox)
