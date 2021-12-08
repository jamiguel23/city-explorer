import axios from 'axios';
import React, { Component } from 'react'

export default class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      weather: []
    }
  }


  weatherRequest = async() => {
    const weatherInfo = await axios.get(`${process.env.REACT_APP_URL}/weather`)
    this.setState({ weather : weatherInfo.data})
  }

  componentDidMount() {
    this.weatherRequest();
  }

  render() {
    return (
      <div>
        
        <h3> The Weather in a city </h3>

        <ul> 
          {this.state.weather.length > 0 && this.state.weather.map(item => <li>{item}</li>)}
        </ul>



      </div>
    )
  }
}
