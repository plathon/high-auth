import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from '../actions/article'

import ArticleList from '../components/articles/ArticleList'

class ArticleContainer extends Component {

  componentWillMount(){
    this.props.getArticles()
  }

  render () {
    return (
      <div>
        <h1>Article</h1>
        <ArticleList articles={this.props.articles} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { articles: state.article.items }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)
