import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authenticateUser } from '../actions'

import SignInForm from '../components/auth/SignInForm'

class AuthContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      user:{
        email: "",
        password: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    var name = e.target.name
    var value = e.target.value
    this.setState((state) => {
      state.user[ name ] = value
      return state
    })
  }

  handleSubmit(e){
    e.preventDefault()
    let { query } = this.props.location
    this.props.authenticateUser(this.state.user, query.redirect)
  }

  render(){
    return (
      <div>
        <h4>Authentication</h4>
        <SignInForm handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}/>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ authenticateUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(AuthContainer)
