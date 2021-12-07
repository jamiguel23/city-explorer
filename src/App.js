
import React, { Component } from 'react'
import axios from 'axios';

// https://us1.locationiq.com/v1/search.php?key=pk.38e0d6bfcc9cadcc468246793fb2df34&q=seattle&format=json

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      queryCity: ''
    }
  }

  getLocation = async() => {
    let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.38e0d6bfcc9cadcc468246793fb2df34&q=${this.state.queryCity}&format=json`)
    console.log(result.data);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ queryCity: e.target.city.value}, this.getLocation)
    // console.log(this.state.queryCity);
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 

        <input type="text" placeholder="city name" name="city"></input>
        <button type="submit">Explore!</button>

        </form>
      </div>
    )
  }
}
