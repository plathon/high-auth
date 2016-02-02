import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signin } from '../actions'

class AuthContainer extends Component {

  render(){
    return (
      <div>
        <h4>Authentication</h4>
        <label>Login</label>
        <input name="login" type="text"/>
        <label>Password</label>
        <input name="password" type="password"/>
        <button type="submit">Enter</button>
      </div>
    )
  }

}

function mapStateToProps({ auth }){
  return { auth }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
