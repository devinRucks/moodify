import React from 'react';
import '../scss/sidebar.scss'
import { NavLink } from 'react-router-dom'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
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
     'color': '#333'
}


const Sidebar = observer(() => {

     return (
          <section id="sidebar-container">

               <NavLink to="/mood"
                    activeClassName="tab-active"
                    style={linkStyle}>

                    < MoodOutlinedIcon style={{ fontSize: 30 }} />
                    <div>Mood</div>

               </NavLink>

               <NavLink to="/weather"
                    activeClassName="tab-active"
                    style={linkStyle}>

                    < CloudOutlinedIcon style={{ fontSize: 30 }} />
                    <div >Weather</div>

               </NavLink>

          </section>
     );
})


export default Sidebar;