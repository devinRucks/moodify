import React from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom'

const Home = () => {

     const handleGetAlbums = () => {
          axios.get('http://localhost:8888/getAlbums')
               .then((res) => {
                    console.log(res.data)
               })
     }

     const handleGetSongs = () => {
          axios.get('http://localhost:8888/getSongs')
               .then((res) => {
                    console.log(res.data)
               })
     }

     return (
          <div className="App">
               <h1>This is the home component</h1>
               <button onClick={handleGetAlbums}>Get Albums</button>
               <button onClick={handleGetSongs}>Get Songs</button>
          </div>
     );
}


export default Home;