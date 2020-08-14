import React, { useEffect } from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom'

const Home = () => {

     useEffect(() => {
          getSongs();
     }, [])

     const getSongs = async () => {
          const res = await axios.get('/getSongs');
          console.log(res.data)
     }

     const handleGetAlbums = () => {
          axios.get('/getAlbums')
               .then((res) => {
                    console.log(res.data)
               })
     }

     // const handleGetSongs = () => {
     //      axios.get('/getSongs')
     //           .then((res) => {
     //                console.log(res.data)
     //           })
     // }

     return (
          <div className="App">
               <h1>This is the home component</h1>
               <button onClick={handleGetAlbums}>Get Albums</button>
               {/* <button onClick={getSongs}>Get Songs</button> */}
          </div>
     );
}


export default Home;