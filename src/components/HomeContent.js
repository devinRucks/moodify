import React, { useEffect } from 'react';
import '../scss/home-content.scss';
import MoodSelector from './MoodSelector'
import axios from 'axios'

const HomeContent = (props) => {
     const { currentTab } = props;

     useEffect(() => {
          checkToGetTracks()
     }, [])

     /**
      * - Gets updated tracks from server ONLY if more than 24 hours has passed since the past update,
      * or if there is no date in localStorage at all (meaning this is the first time the user is using the app)
      * - The reasoning behind this is to reduce unnecessary api calls. Most likely the data wont change at all within 24 hours.
      */
     const checkToGetTracks = async () => {
          const today = new Date();
          if (localStorage.hasOwnProperty('date')) {

               const pastDate = Date.parse(localStorage.getItem('date'))

               // 86400000 milliseconds = 24 hours
               if (today - pastDate > 86400000) {
                    getTracks(today)
                    console.log("It has been more than 24 hours")
               }
          } else {
               getTracks(today)
               console.log("Date didnt exist")
          }
     }

     const getTracks = async (date) => {
          const res = await axios.get('/getSongs');

          localStorage.setItem('date', date)
          localStorage.setItem('tracks', JSON.stringify(res.data))
     }

     return (
          <section id="main-container">
               <section id="mood-weather-container">
                    {(currentTab === 'Mood') && < MoodSelector />}
               </section>

               <button className="create-playlist-button">CREATE PLAYLIST</button>

          </section>
     );
}

export default HomeContent;