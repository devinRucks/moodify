import React, { useContext } from 'react';
import '../scss/sidebar.scss'
// import { NavLink } from 'react-router-dom'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import { SidebarStoreContext } from '../stores/SidebarStore'
import { observer } from 'mobx-react';

const linkStyle = {
     'textDecoration': 'none',
     'display': 'flex',
     'flexDirection': 'column',
     'justifyContent': 'space-evenly',
     'alignItems': 'center',
     'margin': '20px 0',
     'cursor': 'pointer',
     'height': '70px',
     'width': '100%',
     'color': '#eee'
}


const Sidebar = observer(() => {
     const SidebarStore = useContext(SidebarStoreContext)

     return (
          <section id="sidebar-container">

               <div
                    style={linkStyle}
                    onClick={() => SidebarStore.handleTabClick("Mood")}>

                    < MoodOutlinedIcon style={{ fontSize: 30 }} />
                    <div>Mood</div>

               </div>

               <div
                    style={linkStyle}
                    onClick={() => SidebarStore.handleTabClick("Weather")}>

                    < CloudOutlinedIcon style={{ fontSize: 30 }} />
                    <div >Weather</div>

               </div>

          </section>
     );
})


export default Sidebar;