import React, { useEffect, useState, useContext } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios'
import Loading from './Loading'
import { LoadingStoreContext } from '../stores/LoadingStore'
import '../scss/weather.scss';
// import Snowy from '../svgs/snowy-4.svg'

/**
 * - Check if user gave permission
 * - Check if there is weather data in session, if there is, load the data, if not do the following: 
 * - Display loading symbol if they did, error msg if they didnt
 * - Get lat and long
 * - Send lat and long to api
 * - Once response is recieved, remove loading symbol
 * - Store data in session
 * - Display data
 */


const Weather = observer(() => {
     const LoadingStore = useContext(LoadingStoreContext)
     const [weatherData, setWeatherData] = useState({
          city: '',
          state: '',
          description: '',
          is_day: '',
          temp: 0,
          feelslike: 0
     })


     useEffect(() => {
          if ("geolocation" in navigator) {
               if (sessionStorage.length === 0) {
                    getCoordsAndWeather();
               } else {
                    const sessionData = JSON.parse(sessionStorage.weatherData)
                    setWeatherData({
                         ...weatherData,
                         city: sessionData.city,
                         state: sessionData.state,
                         description: sessionData.description,
                         is_day: sessionData.is_day,
                         temp: sessionData.temp,
                         feelslike: sessionData.feelslike
                    })
               }
          }
          // eslint-disable-next-line
     }, [])



     const getCoordsAndWeather = async () => {
          LoadingStore.setCoordsLoading(true)
          const { coords } = await getCoords()
          LoadingStore.setCoordsLoading(false)

          LoadingStore.setWeatherLoading(true)
          await getWeatherData(coords.latitude, coords.longitude)
          LoadingStore.setWeatherLoading(false)
     }



     const getWeatherData = async (lat, long) => {
          await axios.post('/weather', { lat, long })
               .then((res) => {
                    setWeatherData({
                         ...weatherData,
                         city: res.data.city,
                         state: res.data.state,
                         description: res.data.description,
                         is_day: res.data.is_day,
                         temp: res.data.temp,
                         feelslike: res.data.feelslike
                    })

                    sessionStorage.setItem('weatherData', JSON.stringify({
                         city: res.data.city,
                         state: res.data.state,
                         description: res.data.description,
                         is_day: res.data.is_day,
                         temp: res.data.temp,
                         feelslike: res.data.feelslike
                    }))
               })
               .catch((err) => {
                    console.log(err)
               })
     }



     const getCoords = (options = {}) => {
          return new Promise((resolve, reject) => {
               navigator.geolocation.getCurrentPosition(resolve, reject, options);
          });
     }



     return (
          <section id="weather-container">
               {(LoadingStore.loadingWeather || LoadingStore.loadingCoords) &&
                    < Loading />
               }
               {(!LoadingStore.loadingWeather && !LoadingStore.loadingCoords) &&
                    <>
                         <h1>Weather Component</h1>
                         <h2>{weatherData.city}</h2>
                    </>
               }
          </section>
     )


})


export default Weather;