import React, { Component } from 'react'
// import axios from 'axios';

export default class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      weather: []
    }
  }

  render() {
    return (
      <div>
        
        <h3> Here is the 16 day forecast for your searched city! </h3>

        <ol> 
          {this.props.weather.map(day => <li key={day.date}> {day.date} : {day.description}</li>)}
        </ol>

      </div>
    )
  }
}
