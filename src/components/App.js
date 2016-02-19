import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>APP</li>
          <li><Link to="signin">Sign In</Link></li>
          <li><Link to="signup">Sign Up</Link></li>
          <li><Link to="articles">Articles (Auth)</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(false, false)(App)
