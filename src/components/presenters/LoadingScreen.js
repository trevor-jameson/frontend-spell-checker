import React, { Fragment } from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

const loading = (
  <Fragment>
    <Segment className={'loadEvent'}>
      <Dimmer active>
        <Loader size={'massive'}>Loading</Loader>
        </Dimmer>
    </Segment>
  </Fragment>
  )

export default loading
