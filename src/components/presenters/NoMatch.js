import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'
import './NoMatch.css'

// Refactored as smart component to hide navbar with componentDidMount
// was unable to find navbar as dumb component, because it was not rendered
// during NoMatch's initial execution

class NoMatch extends Component {

  componentDidMount() {
    // Find and hide row containing navbar
    const navbar = document.getElementById('navbar-row')
    navbar.style.display = 'none'
  }

  render() {
    return (
      <div id='no-match'>
        <Message compact warning
        textAlign='centered'
        header="Where do you think you're going?"
        content="404 Error - Page not found"
        id='no-match-msg'
        />
      </div>
    )
  }
}

export default NoMatch
