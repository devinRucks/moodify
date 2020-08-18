import React, { useContext } from 'react';
import '../../scss/sidebar.scss'
import { SidebarStoreContext } from '../../stores/SidebarStore'
import { observer } from 'mobx-react';

const Home = observer(() => {
     const sidebarStore = useContext(SidebarStoreContext)

     return (
          <section id="sidebar-container">
               {sidebarStore.tabs.map((tab, index) =>
                    <section key={index} className="tab-container">

                         <div className="tab"
                              key={index}
                              id={tab}
                              onClick={() => sidebarStore.handleTabClick(tab)}>
                              {tab}
                         </div>

                    </section>
               )}
          </section>
     );
})


export default Home;