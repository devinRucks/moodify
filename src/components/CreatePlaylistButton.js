import React, { useEffect, useContext } from 'react';
import '../scss/content.scss';
import axios from 'axios';
import { TrackFilterStoreContext } from '../stores/TrackFilterStore'
import { observer } from 'mobx-react';
// import HashLoader from "react-spinners/HashLoader";


const CreatePlaylistButton = observer(() => {
     const TrackFilterStore = useContext(TrackFilterStoreContext)

     // const [loading, setLoading] = useState(true);

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
               // setLoading(false)
          } else {
               getTracks(today)
               console.log("Date didnt exist")
          }
     }

     const getTracks = async (date) => {
          const res = await axios.get('/getSongs');

          // setLoading(false)

          localStorage.setItem('date', date)
          localStorage.setItem('tracks', JSON.stringify(res.data))
     }

     return (
          <button
               className="create-playlist-button"
               onClick={() => TrackFilterStore.createPlaylist()}>
               CREATE PLAYLIST
          </button>
     );
})

export default CreatePlaylistButton;