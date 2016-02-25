import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SignInForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>Login: </label>
          <input name="email" type="text" onChange={this.props.handleChange}/>
        </div>
        <div>
          <label>Password: </label>
          <input name="password" type="password" onChange={this.props.handleChange}/>
        </div>
        <button type="submit">Enter</button>
        <br/>
        <Link to="/resetpassword">Forgot Password</Link>
        <br/><br/>
        <a href="#">Login com Facebook</a>
        <br/>
        <a href="#">Login com Twitter</a>
      </form>
    )
  }
}
