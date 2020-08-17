import React from 'react';
import '../../scss/home.scss'
import Body from './Body';
import Sidebar from './Sidebar'


const Home = () => {


     return (
          <div id="home-container">
               < Sidebar />
               <section id="content-container">
                    <Body />
               </section>
          </div>
     );
}


export default Home;