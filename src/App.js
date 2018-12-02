// External Framework Components
import React, { Component, Fragment } from 'react';
import { Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import './App.css';

// Container components
import Login from './components/containers/Login'
import CreateUser from './components/containers/CreateUser'
import SpellSelectionBox from './components/presenters/SpellSelectionBox'
import HomePage from './components/containers/HomePage'
import CharacterSelectionBox from './components/containers/CharacterSelectionBox'

// Presenter components
import Welcome from './components/presenters/Welcome'
import NavBar from './components/presenters/NavBar'
import NoMatch from './components/presenters/NoMatch'


class App extends Component {
  render() {
    return (
      <Grid>

        <Grid.Row>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/create-user" component={CreateUser}/>
            <Route path="/homepage" component={HomePage} />
            <Route path="/spells" component={SpellSelectionBox} />
            <Route path="/characters" component={CharacterSelectionBox} />
            <Route component={NoMatch} />
          </Switch>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
