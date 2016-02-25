import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from '../actions/article'

class ArticleContainer extends Component {

  componentWillMount(){
    this.props.getArticles()
  }

  render () {
    return (
      <div>
        <h1>Article</h1>
        <p>Article content</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { articles: state.default.articles }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)
