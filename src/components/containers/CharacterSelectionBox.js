import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import UserChars from '../presenters/UserChars'

import Loading from '../presenters/LoadingScreen'

import { fetchingChars } from '../../redux/actions/charActions'
import { mapCharsToProps } from '../../redux/mapStateToProps'

class CharacterSelectionBox extends Component {
  constructor(props) {
    super(props)
    this.props.fetchingChars()
  }

  render() {
    return (
      <Fragment>
        <Grid>
          {(this.props.isLoadingChars) ? Loading :
              <UserChars chars={this.props.chars} />
          }
        </Grid>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingChars: () => {dispatch(fetchingChars())}
  }
}

export default connect(mapCharsToProps, mapDispatchToProps)(CharacterSelectionBox)
