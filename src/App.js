// External Framework Components
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

// Container components
import Login from './components/containers/Login'
import CreateUser from './components/containers/CreateUser'
import SpellSelectionBox from './components/presenters/SpellSelectionBox'
import HomePage from './components/containers/HomePage'

// Presenter components
import Welcome from './components/presenters/Welcome'
import NavBar from './components/presenters/NavBar'


class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Welcome}/>
        <Route path="/login" component={Login}/>
        <Route path="/create-user" component={CreateUser}/>
        <Route path="/homepage" component={HomePage} />
        <Route path="/spells" component={SpellSelectionBox} />
      </>
    );
  }
}

export default App;
