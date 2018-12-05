import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import NavBar from '../presenters/NavBar'
import CreateChar from './CreateChar'
import UserChars from '../presenters/UserChars'

import adapter from '../../utils/Adapter'
import loading from '../presenters/LoadingScreen'

import { fetchingChars } from '../../redux/actions/charActions'
import { mapCharsToProps } from '../../redux/mapStateToProps'

class CharacterSelectionBox extends Component {

  componentDidMount() {
    this.props.fetchingChars()
  }

  render() {
    return (
      <>
        <Grid>
          {(this.props.isLoadingChars) ? loading :
            <Grid.Column floated={'right'} width={10}>
              <UserChars chars={this.props.chars} />
            </Grid.Column>
          }
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
