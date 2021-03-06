// External Framework Components
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import './App.css';

// Container components
import SpellSelectionBox from './components/containers/SpellSelectionBox'
import CharacterSelectionBox from './components/containers/CharacterSelectionBox'
import Login from './components/containers/Login'
import CreateUser from './components/containers/CreateUser'

// Presenter components
import NoMatch from './components/presenters/NoMatch'
import GuestUser from './components/presenters/GuestUser'
import Welcome from './components/presenters/Welcome'
import DiceRollerBox from './components/containers/DiceRollerBox'
import NavBar from './components/presenters/NavBar'



class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={CreateUser}/>
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
