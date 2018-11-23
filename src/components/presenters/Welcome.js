import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div id="welcome-message">
      <p>Welcome to Spell Check, brave hero!</p>
      <Link to="login">Login</Link>
      <Link to="/create-user">Create a new adventurer!</Link>
    </div>
  )
}

export default Welcome
