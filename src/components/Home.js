import React, { useState } from 'react';
import '../scss/home.scss'
import HomeContent from './HomeContent';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
// import { Link } from 'react-router-dom'

const Home = () => {
     const tabs = ['Mood', 'Weather']
     const [activeTab, setActiveTab] = useState('Mood');


     const handleTabClick = (e) => {
          setActiveTab(e.target.id)
     }

     return (
          <div id="home-container">
               <section id="sidebar-container">
                    {tabs.map((tab, index) =>
                         <section className="tab-container" id={tab} onClick={handleTabClick}>
                              {tab === 'Mood' &&
                                   <MoodOutlinedIcon
                                        style={{ fontSize: 32 }}
                                   />}

                              {tab === 'Weather' &&
                                   <CloudOutlinedIcon
                                        style={{ fontSize: 32 }}
                                   />}

                              <div className="tab" key={index}>
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