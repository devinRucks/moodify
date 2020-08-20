import React, { useEffect, useContext } from 'react';
import '../scss/content.scss';
import Mood from './Mood';
import Weather from './Weather';
import Track from './Track';
import axios from 'axios';
import { SidebarStoreContext } from '../stores/SidebarStore';
import { TrackFilterStoreContext } from '../stores/TrackFilterStore';
import { observer } from 'mobx-react';

const Body = observer(() => {
     const sidebarStore = useContext(SidebarStoreContext)
     const trackFilterStore = useContext(TrackFilterStoreContext)

     useEffect(() => {
          checkToGetTracks()
          // eslint-disable-next-line
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

               // getTracks(today)
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
          console.log(res.data)

          localStorage.setItem('date', date)
          localStorage.setItem('tracks', JSON.stringify(res.data))
     }

     return (
          <section id="body-container">
               <section id="mood-weather-container">
                    {(sidebarStore.activeTab === 'Mood') && < Mood />}
                    {(sidebarStore.activeTab === 'Weather') && < Weather />}
               </section>

               <section id="button-container">
                    <button
                         className="create-playlist-button"
                         onClick={() => trackFilterStore.createPlaylist()}>
                         CREATE PLAYLIST
                    </button>
               </section>

               <hr className="content-separator" />

               {trackFilterStore.filteredTracks.map((track, index) => {
                    return (
                         < Track
                              key={index}
                              index={index + 1}
                              albumCover={track.album_cover}
                              artist={track.artist}
                              track={track.track}
                         />
                    )
               })}

          </section>
     );
})

export default Body;