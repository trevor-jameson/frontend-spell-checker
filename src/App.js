// External Framework Components
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import './App.css';

// Container components
import SpellSelectionBox from './components/containers/SpellSelectionBox'
import CharacterSelectionBox from './components/containers/CharacterSelectionBox'


// Presenter components
import NoMatch from './components/presenters/NoMatch'
import GuestUser from './components/presenters/GuestUser'
import Welcome from './components/presenters/Welcome'
import DiceRollerBox from './components/containers/DiceRollerBox'
import NavBar from './components/presenters/NavBar'

// Login flow breakdown
// If user has a jwt, test validity, redirect to 



class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/welcome" component={Welcome}/>
          {window.sessionStorage.jwt === undefined ? <GuestUser/> :
            <Grid stretched={true} id='grid'>
              <Grid.Row id="navbar-row">
                <NavBar />
              </Grid.Row>
              <Grid.Row id="user-pages-row" centered>
                <Switch>
                  <Route path="/spells" component={SpellSelectionBox} />
                  <Route path="/characters" component={CharacterSelectionBox} />
                  <Route path="/dice" component={DiceRollerBox} />
                  <Route component={NoMatch} />
                </Switch>
              </Grid.Row>
            </Grid>
          }
          <Route component={NoMatch} />
        </Switch>
    );
  }
}

export default App;
