import React, { Component } from 'react'

export default class SignUpForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" type="text" onChange={this.props.handleChange}/>
        </div>
        <div>
          <label>Login: </label>
          <input name="email" type="text" onChange={this.props.handleChange}/>
        </div>
        <div>
          <label>Password: </label>
          <input name="password" type="password" onChange={this.props.handleChange}/>
        </div>
        <button type="submit">Enter</button>
      </form>
    )
  }
}
