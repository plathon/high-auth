import React, { Component } from 'react'

export default class SignInForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Login</label>
        <input name="email" type="text" onChange={this.props.handleChange}/>
        <label>Password</label>
        <input name="password" type="password" onChange={this.props.handleChange}/>
        <button type="submit">Enter</button>
      </form>
    )
  }
}
