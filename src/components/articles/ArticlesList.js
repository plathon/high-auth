import React, { Component } from 'react'

export default class ArticlesList extends Component {
  render () {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        {this.props.articles.map((i, article) =>
          <tr key={i}>
            <td>{article.name}</td>
            <td>{article.description}</td>
          </tr>
        )}
      </table>
    )
  }
}
