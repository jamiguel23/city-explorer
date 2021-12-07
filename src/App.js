
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      queryCity: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
      this.setState({ queryCity: e.target.city.value})
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 

        <input type="text" placeholder="city name" name="city"></input>
        <button type="submit">Find City</button>

        </form>
      </div>
    )
  }
}
