import React from 'react';
import '../scss/weather.scss';
import { observer } from 'mobx-react';
import Snowy from '../svgs/snowy-4.svg'



const Weather = observer(() => {

     return (
          <section id="weather-container">
               <img style={{ height: 160, width: 160, border: "1px red solid" }} src={Snowy} alt="snowy" />
          </section>
     )


})




export default Weather;