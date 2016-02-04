import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signin, signup } from '../actions'

class AuthContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      login: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    var name = e.target.name
    var value = e.target.value
    this.setState((state) => {
      state[ name ] = value
      return state
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.signup(this.state);
  }

  render(){
    return (
      <div>
        <h4>Authentication</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Login</label>
          <input name="login" type="text" onChange={this.handleChange}/>
          <label>Password</label>
          <input name="password" type="password" onChange={this.handleChange}/>
          <button type="submit">Enter</button>
        </form>
      </div>
    )
  }

}

function mapStateToProps({ auth }){
  return { auth }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signin, signup }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
