import React, { Component } from 'react'

class ArticlesList extends Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.articles.map((article, i) =>
            <tr key={i}>
              <td>{article.name}</td>
              <td>{article.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

ArticlesList.propTypes = {
  articles: React.PropTypes.array.isRequired
}

export default ArticlesList
