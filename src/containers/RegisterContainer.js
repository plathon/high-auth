import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from '../actions'

import SignUpForm from '../components/auth/SignUpForm'

class RegisterContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: {
        name: "",
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
    this.props.registerUser(this.state.user)
  }

  render(){
    return (
      <div>
        <h4>Authentication</h4>
        <SignUpForm handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}/>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ registerUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(RegisterContainer)
