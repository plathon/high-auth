import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

function TopBar({ push, children }) {
  return (
    <ul>
      <li>APP</li>
      <li><Link to="signin">Sign In</Link></li>
      <li><Link to="signup">Sign Up</Link></li>
    </ul>
  )
}

export default connect(null, routeActions)(TopBar)
