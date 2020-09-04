import React, { useEffect, useState, useContext } from 'react';
import '../../scss/weather.scss';
import { observer } from 'mobx-react';
import axios from 'axios'
import Loading from '../Loading'
import { LoadingStoreContext } from '../../stores/LoadingStore'
import { TrackFilterStoreContext } from '../../stores/TrackFilterStore'
import Cloudy from '../../svgs/cloudy.svg'
// import Thunder from '../svgs/thunder.svg'

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


const WeatherSelector = observer(() => {
     const trackFilterStore = useContext(TrackFilterStoreContext)
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
               if (sessionStorage.weatherData === undefined) {
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

     useEffect(() => {
          trackFilterStore.setFilterValuesFromWeather(weatherData)
          // eslint-disable-next-line
     }, [weatherData])



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
                    console.log(res.data)
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
          <section id="content-container">
               {(LoadingStore.loadingWeather || LoadingStore.loadingCoords) &&
                    < Loading />
               }
               {(!LoadingStore.loadingWeather && !LoadingStore.loadingCoords) &&
                    <section id="weather-container">
                         <section id="details-container">
                              <div className="description">{weatherData.description}</div>
                              <div className="temp">{weatherData.temp}</div>
                              <div className="city">{weatherData.city}</div>
                              <div className="state">{weatherData.state}</div>
                         </section>
                         <section id="icon-container">
                              <img src={Cloudy} style={{ height: 190, width: 190 }} alt="cloudy" />
                         </section>
                    </section>
               }
          </section>
     )


})


export default WeatherSelector;