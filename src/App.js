import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

// Container components
import Login from './components/containers/Login'
import CreateUser from './components/containers/CreateUser'
import SpellSelectionBox from './components/presenters/SpellSelectionBox'

// Presenter components
import Welcome from './components/presenters/Welcome'


class App extends Component {
  render() {
    return (
      <>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
      <Route path="/create-user" component={CreateUser}/>
      <Route path="/spells" component={SpellSelectionBox}/>
      
      {/* These components have not been defined */}
      <Route path="/characters" />
      <Route path="/sessions" />
      <Route path="/logout" />
      </>
    );
  }
}

export default App;
