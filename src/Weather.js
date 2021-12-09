import React, { Component } from 'react'
// import axios from 'axios';

export default class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      weather: []
    }
  }


  // weatherRequest = async() => {
  //   const weatherInfo = await axios.get(`${process.env.REACT_APP_URL}/weather?city_name=${this.props.queryCity}`)
  //   this.setState({ weather : weatherInfo.data})
  //   console.log(this.state.weather)
  // }

  // componentDidMount() {
  //   this.weatherRequest();
  // }
  

  render() {
    return (
      <div>
        
        <h3> The Weather in a city </h3>

        <ul> 
          {this.props.weather.map(day => <li key={day.date}> {day.date} : {day.description}</li>)}
        </ul>



      </div>
    )
  }
}
