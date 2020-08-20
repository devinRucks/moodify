import React, { useContext } from 'react';
import '../scss/sidebar.scss'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import { SidebarStoreContext } from '../stores/SidebarStore'
import { observer } from 'mobx-react';

const Home = observer(() => {
     const sidebarStore = useContext(SidebarStoreContext)

     return (
          <section id="sidebar-container">

               <div id="tab-container"
                    onClick={() => sidebarStore.handleTabClick('Mood')}
                    className={sidebarStore.activeTab === 'Mood' ? 'tab-active' : 'tab-inactive'}>
                    < MoodOutlinedIcon style={{ fontSize: 30 }} />
                    <div className="tab">Mood</div>
               </div>

               <div id="tab-container"
                    onClick={() => sidebarStore.handleTabClick('Weather')}
                    className={sidebarStore.activeTab === 'Weather' ? 'tab-active' : 'tab-inactive'}>
                    < CloudOutlinedIcon style={{ fontSize: 30 }} />
                    <div className="tab">Weather</div>
               </div>

          </section>
     );
})


export default Home;