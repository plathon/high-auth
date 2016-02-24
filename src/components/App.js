import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions'

require('../styles/app.css')

class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>APP</li>
          <li><Link to="signin">Sign In</Link></li>
          <li><Link to="signup">Sign Up</Link></li>
          <li><Link to="articles">Articles (Auth)</Link></li>
          <li><a href="" onClick={this.props.logoutUser}>logout</a></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(false, mapDispatchToProps)(App)
