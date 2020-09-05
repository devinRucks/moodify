import React, { useContext } from 'react';
import '../scss/content.scss';
import { TrackFilterStoreContext } from '../stores/TrackFilterStore'
import { LoadingStoreContext } from '../stores/LoadingStore'
import { observer } from 'mobx-react';
import axios from 'axios';


const CreatePlaylistButton = observer((props) => {
     const TrackFilterStore = useContext(TrackFilterStoreContext)
     const LoadingStore = useContext(LoadingStoreContext)


     const handleClick = async () => {
          await checkToGetTracks()
          TrackFilterStore.createPlaylist(props.currentTab)
     }

     /**
      * - Gets updated tracks from server ONLY if more than 24 hours has passed since the past update,
      * or if there is no date in localStorage at all (meaning this is the first time the user is using the app)
      * - The reasoning behind this is to reduce unnecessary api calls. Most likely the data wont change at all within 24 hours.
      */
     const checkToGetTracks = async () => {
          // 86400000 milliseconds = 24 hours
          const oneDay = 86400000

          const today = new Date();

          if (localStorage.hasOwnProperty('date')) {

               const pastDate = Date.parse(localStorage.getItem('date'))

               if (today - pastDate > oneDay) {
                    await getTracks(today)
               }
          } else {
               await getTracks(today)
          }
     }

     const getTracks = async (date) => {
          LoadingStore.setTracksLoading(true)
          const res = await axios.get('/getSongs')
          LoadingStore.setTracksLoading(false)

          localStorage.setItem('date', date)
          localStorage.setItem('tracks', JSON.stringify(res.data))
     }


     return (
          <button
               disabled={(LoadingStore.loadingCoords || LoadingStore.loadingWeather) && props.currentTab === "weather"}
               className="create-playlist-button"
               onClick={handleClick}>
               CREATE PLAYLIST
          </button>
     );
})

export default CreatePlaylistButton;