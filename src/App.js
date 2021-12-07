
import React, { Component } from 'react'
import axios from 'axios';

// https://us1.locationiq.com/v1/search.php?key=pk.38e0d6bfcc9cadcc468246793fb2df34&q=seattle&format=json

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      queryCity: '',
      locationObject: {},
      lat :{},
      long: {},
      error :false
    }
  }

  getLocation = async() => {
    try {

      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.38e0d6bfcc9cadcc468246793fb2df34&q=${this.state.queryCity}&format=json`)
      console.log(result.data[0]);
      this.setState({locationObject: result.data[0]})

    } catch(error){
      console.log(error);
      console.log('there was an error')
      this.setState({error :true})
    }
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

        {this.state.locationObject.display_name? <p> {this.state.locationObject.display_name} Lat -{this.state.locationObject.lat} Long:{this.state.locationObject.lon} </p> : <p> Search for a city to explore</p>}
        {this.state.error && <p> Type in a city, there was an error in your input</p>};
      </div>
    )
  }
}
