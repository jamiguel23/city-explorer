import React, { Component } from 'react'

export default class Movie extends Component {

  constructor(props){
    super(props);
    this.state = {
  
    }
  }

  render() {
    return (
      <div>
        
        <h3> {this.props.movie.title}</h3>
        <img src={this.props.movie.image_url} alt = {this.props.movie.overview}/>
        <p> {this.props.movie.overview}</p>

        <ol> 

        </ol>

      </div>
    )
  }
}
