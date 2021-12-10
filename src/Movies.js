import React, { Component } from 'react'
import Movie from './Movie'

export default class Movies extends Component {
  render() {
    return (
      <div>
          {this.props.movies.length > 0 && this.props.movies.map(movie => <Movie movie={movie} />)}
      </div>
    )
  }
}
