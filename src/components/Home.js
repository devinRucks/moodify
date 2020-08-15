import React, { useState } from 'react';
import '../scss/home.scss'
import MainComponent from './MainComponent'
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
                         <div className="tab"
                              key={index}
                              id={tab}
                              onClick={handleTabClick}>
                              {tab}
                         </div>
                    )}
               </section>
               <section id="content-container">
                    <MainComponent currentTab={activeTab} />
               </section>
          </div>
     );
}


export default Home;