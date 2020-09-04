import React, { useState, useEffect } from 'react';
import '../scss/loading-screen.scss'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";

const LoadingScreen = () => {
     const [loading, setLoading] = useState(true);

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
               setLoading(false)
          } else {
               getTracks(today)
               console.log("Date didnt exist")
          }
     }

     const getTracks = async (date) => {
          const res = await axios.get('/getSongs');

          setLoading(false)

          localStorage.setItem('date', date)
          localStorage.setItem('tracks', JSON.stringify(res.data))
     }

     return (
          <React.Fragment>
               {!loading &&
                    <Redirect to='/home' />
               }
               {loading &&
                    <section id="loading-container">

                         <HashLoader
                              loading={true}
                              color={'#1DB954'}
                         />
                    </section>
               }
          </React.Fragment>
     )
}

export default LoadingScreen;