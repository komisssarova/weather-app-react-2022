import React from 'react';
import './weather.css';

const WeatherTemperature = (props) => {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">℃</span>
    </div>
  );
};

export default WeatherTemperature;
