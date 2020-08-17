import React, { useState } from 'react';
import '../scss/home.scss'
import HomeContent from './HomeContent';
// import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
// import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';


const Home = () => {
     const tabs = ['Mood', 'Weather']
     const [activeTab, setActiveTab] = useState('Mood');


     const handleTabClick = (e) => {
          console.log(e.target.id)
          setActiveTab(e.target.id)
     }

     return (
          <div id="home-container">
               <section id="sidebar-container">
                    {tabs.map((tab, index) =>
                         <section className="tab-container">

                              <div className="tab"
                                   key={index}
                                   id={tab}
                                   onClick={handleTabClick}>
                                   {tab}
                              </div>

                         </section>
                    )}
               </section>
               <section id="content-container">
                    <HomeContent currentTab={activeTab} />
               </section>
          </div>
     );
}


export default Home;