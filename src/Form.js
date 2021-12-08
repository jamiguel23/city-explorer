import React, { Component } from 'react'
import axios from 'axios';
import Weather from './Weather';

export default class Form extends Component {


  constructor(props) {
    super(props);
    this.state = {
      queryCity: '',
      locationObject: {},
      weather: [],
      error: false
    }
  }



  getLocation = async () => {
    try {

      let cityResult = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.queryCity}&format=json`)
      console.log(cityResult.data[0]);
      this.setState({ locationObject: cityResult.data[0]})

    } catch (error) {
      console.log(error);
      console.log('there was an error')
      this.setState({ error: true })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ queryCity: e.target.city.value }, this.getLocation)
    // console.log(this.state.queryCity);
  }
  render() {
    return (
      <div>
        <h1> City Explorer</h1>
        <Weather queryCity = {this.state.queryCity} />
        <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder="city name" name="city"></input>
          <button type="submit">Explore!</button>

        </form>

        {this.state.locationObject.display_name ? <p> {this.state.locationObject.display_name} Lat -{this.state.locationObject.lat} Long:{this.state.locationObject.lon} </p>
          : <p> Search for a city to explore</p>}
        {this.state.error && <p> Type in a city, there was an error in your input</p>};

        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=12&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`} alt='map of a city' />
      </div>
    )
  }
}
