import React from 'react';
import '../../scss/home.scss'
import Content from './Content';
import Sidebar from './Sidebar'


const Home = () => {


     return (
          // <div id="home-container">
          //      < Sidebar />
          //      <section id="content-container">
          //           <Body />
          //      </section>
          // </div>
          <React.Fragment>
               <Sidebar />
               <section id="center-content">
                    <Content />
               </section>
          </React.Fragment>
     );
}


export default Home;