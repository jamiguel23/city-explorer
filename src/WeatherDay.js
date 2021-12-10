import React, { Component } from 'react'
import Weather from './Weather'

export default class WeatherDay extends Component {
  render() {
    return (
      <div>
         {this.props.weather.length > 0 && <Weather weather={this.props.weather} />}
      </div>
    )
  }
}
