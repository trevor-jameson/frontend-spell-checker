import React, { Fragment } from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

const loading = (
  <>
    <Segment className={'loadEvent'}>
      <Dimmer active>
        <Loader size={'massive'}>Loading</Loader>
        </Dimmer>
    </Segment>
  </>
  )

export default loading
