import React, { useEffect } from 'react';
import '../scss/main-component.scss';
import MoodSelector from '../components/MoodSelector'
import axios from 'axios'

const MainComponent = (props) => {
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
                    console.log("LocalStorage was updated")
               }
          } else {
               getTracks(today)
               console.log("LocalStorage was updated")
          }
     }

     const getTracks = async (date) => {
          const res = await axios.get('/getSongs');

          localStorage.setItem('date', date)
          localStorage.setItem('tracks', JSON.stringify(res.data))
     }

     /**
      * TODO:
      * - If the current tab is mood, display mood selector component
      * - If the current tab is weather, display the weather component
      * - Button will stay the same for all props
      * - Add loading option for button (May not need, error message incase localStorage is empty may be better)
      * - Regardless of the tab, it will use the track component (takes props of artist, track, album, cover art). This will need to be mapped
      * - Home component will set local storage of entire song info.
      * 
      * 
      * - Weather Component:
      *   - Will make call to server to get current weather info.
      *   - When thats done, it will display weather graphic
      *   - Sends weather info to some function that get track details
      *   - Use redux to store track details. This same store will be used for the mood component.
      *   - When button here is clicked, it will take the current track details from the store use that to sort thru local storage.
      */

     return (
          <section id="container">
               {(currentTab === 'Mood') && < MoodSelector />}
               <div id="test-text">This is the {currentTab} container</div>
          </section>
     );
}

export default MainComponent;