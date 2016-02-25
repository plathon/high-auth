import React, { Component } from 'react'

class ResetPasswordContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h3>Reset Password</h3>
        <form>
          <div>
            <label>Email: </label>
            <input name="email" />
          </div>
          <button>Send me reset password instructions</button>
        </form>
      </div>
    )
  }
}

export default ResetPasswordContainer
