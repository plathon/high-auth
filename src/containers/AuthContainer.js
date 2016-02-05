import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authenticateUser } from '../actions'

import SignInForm from '../components/auth/SignInForm'
import TopBar from '../components/topBar/TopBar'

class AuthContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      user:{
        login: "",
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
    this.props.authenticateUser(this.state.user)
  }

  render(){
    return (
      <div>
        <TopBar />
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
