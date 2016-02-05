import React, { Component } from 'react'

export default class SignUpForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" onChange={this.props.handleChange}/>
        <label>Login</label>
        <input name="login" type="text" onChange={this.props.handleChange}/>
        <label>Password</label>
        <input name="password" type="password" onChange={this.props.handleChange}/>
        <button type="submit">Enter</button>
      </form>
    )
  }
}
