import React, { Component } from 'react'
import axios from 'axios';
import Movies from './Movies';
import WeatherDay from './WeatherDay';


export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queryCity: '',
      locationObject: {},
      weather: [],
      movies: [],
      error: false
    }
  }

  getLocation = async () => {
    try {

      let cityResult = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.queryCity}&format=json`)
      console.log(cityResult.data[0]);
      this.setState({ locationObject: cityResult.data[0] }, this.getAllInfo)
      this.setState({ error: false });


    } catch (error) {
      console.log(error);
      console.log('there was an error')
      this.setState({ error: true })
    }
  }


  weatherRequest = async () => {

    // let city = this.state.locationObject.display_name.split(',')[0];
    let url = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.locationObject.lat}&lon=${this.state.locationObject.lon}`;

    try {
      let results = await axios.get(url);
      this.setState({ weather: results.data })
      console.log(this.state.weather)
      this.setState({ error: false });
      //comment 

    } catch (e) {
      this.setState({ error: false })
      this.setState({ weather: [] })
    }
  }

  getMovies = async () => {

    try {
      const city_name = this.state.locationObject.display_name.split(',')[0];
      const url = `${process.env.REACT_APP_SERVER}/movie?city_name=${city_name}`;
      let movieRes = await axios.get(url);
      console.log(this.state.movies)
      this.setState({ movies: movieRes.data })

    } catch(e) {
    this.setState({ error: false })
    this.setState({ movies: [] })
    }
  }

  getAllInfo = () => {
    this.weatherRequest();
    this.getMovies();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ queryCity: e.target.city.value }, this.getLocation)
  }
  render() {
    return (
      <div>
        <h1> City Explorer</h1>
        <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder="city name" name="city"></input>
          <button type="submit">Explore!</button>

        </form>

        {this.state.locationObject.display_name ? <p> {this.state.locationObject.display_name} Lat -{this.state.locationObject.lat} Long:{this.state.locationObject.lon} </p>
          : <p> Search for a city to explore</p>}
        {this.state.error && <p> Type in a city, there was an error in your input</p>};

        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=12&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`} alt='map of a city' />

      <WeatherDay weather = {this.state.weather} />
      <Movies movies = {this.state.movies} />

      </div>
    )
  }
}
