import React, { useContext } from 'react';
import '../scss/content.scss';

import { observer } from 'mobx-react';
import { TrackFilterStoreContext } from '../stores/TrackFilterStore';
import { SidebarStoreContext } from '../stores/SidebarStore'
import MoodSelector from '../components/mood/MoodSelector';
import WeatherSelector from '../components/weather/WeatherSelector';
import CreatePlaylistButton from './CreatePlaylistButton'
import Track from './Track';
import Sidebar from './Sidebar';


const Home = observer(() => {
     const TrackFilterStore = useContext(TrackFilterStoreContext)
     const SidebarStore = useContext(SidebarStoreContext)


     return (
          <React.Fragment>

               <Sidebar />

               <section id="background">
                    <section id="body-container">
                         <section id="mood-weather-button-container">

                              <section id="mood-weather-container">
                                   {(SidebarStore.activeTab === "Mood")
                                        ?
                                        < MoodSelector />
                                        :
                                        < WeatherSelector />
                                   }
                              </section>

                              <section id="button-container">
                                   < CreatePlaylistButton currentTab={SidebarStore.activeTab} />
                              </section>

                         </section>

                         {SidebarStore.activeTab === "Mood"
                              ?
                              TrackFilterStore.moodFilteredTracks.map((track, index) => {
                                   return (
                                        < Track
                                             key={index}
                                             index={index + 1}
                                             albumCover={track.album_cover}
                                             artist={track.artist}
                                             track={track.track}
                                        />
                                   )
                              })
                              :
                              TrackFilterStore.weatherFilteredTracks.map((track, index) => {
                                   return (
                                        < Track
                                             key={index}
                                             index={index + 1}
                                             albumCover={track.album_cover}
                                             artist={track.artist}
                                             track={track.track}
                                        />
                                   )
                              })
                         }

                    </section>
               </section>
          </React.Fragment>
     );
})

export default Home;