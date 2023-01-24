import React from 'react';
import style from './Details.module.css';

const Details = () => (
  <div className={style.app}>
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.location}>
          <p>Houston</p>
        </div>
        <div className="temp">
          <h1>79°F</h1>
        </div>
        <div className={style.description}>
          <p>Clouds</p>
        </div>
      </div>
      <div className={style.bottom}>
        <div className="humidity">
          <p className="bold">50%</p>
          <p>Humidity</p>
        </div>
        <div className="feels">
          <p className="bold">79°F</p>
          <p>Feels Like</p>
        </div>
        <div className="wind">
          <p className="bold">5MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  </div>

);

export default Details;
