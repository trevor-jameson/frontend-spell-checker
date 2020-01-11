import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'


import WelcomeOptions from './WelcomeOptions.js'
import Login from '../containers/Login.js'
import Signup from '../containers/Signup.js'

import './Welcome.css'

class Welcome extends React.Component {

  state = {
    activeModal: 'welcome'
  }

  changeActiveModal = (event) => {
    this.setState({
      activeModal: event.currentTarget.name
    })
  }

  whichToRender = () => {

    const activeModal = this.state.activeModal

    if (activeModal === 'welcome') {
      return <WelcomeOptions changeActiveModal={this.changeActiveModal} />
    } else if (activeModal === 'login') {
      return <Login />
    } else if (activeModal === 'signup') {
      return <Signup />
    }
  }

  render(){
    return (
      <Grid>
      <div id="welcome-screen">
        <Grid.Column>
          <div id="welcome-selector-box">
            <Segment padded inverted centered>
              <Header
              content='SpellChecker'
              id='app-title'
              />
              {this.whichToRender()}
              </Segment>
              </div>
            </Grid.Column>
      </div>
      </Grid>
    )
  }
  }

export default Welcome
