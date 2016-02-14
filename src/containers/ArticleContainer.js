import React, { Component } from 'react'
import { connect } from 'react-redux'

class ArticleContainer extends Component {
  render () {
    return (
      <div>
        <h1>Article</h1>
        <p>Article content</p>
      </div>
    )
  }
}

export default connect(null, null)(ArticleContainer)
