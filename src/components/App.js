import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions/user'

class App extends Component {

  authenticateRender () {
    if (this.props.token)
      return <li><button onClick={this.props.logoutUser}>logout</button></li>
  }

  render () {
    return (
      <div>
        <ul>
          <li>APP</li>
          <li><Link to="signin">Sign In</Link></li>
          <li><Link to="signup">Sign Up</Link></li>
          <li><Link to="articles">Articles (Auth)</Link></li>
          {this.authenticateRender()}
        </ul>
        <div>{this.props.children}</div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch)
}

function mapStateToProps(state) {
  return { token: state.token }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
