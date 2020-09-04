import React, { useContext } from 'react';
import '../scss/content.scss';
import Mood from './Mood';
import Weather from './Weather';
import Track from './Track';
import { SidebarStoreContext } from '../stores/SidebarStore';
import { TrackFilterStoreContext } from '../stores/TrackFilterStore';
import { observer } from 'mobx-react';

const Body = observer(() => {
     const SidebarStore = useContext(SidebarStoreContext)
     const TrackFilterStore = useContext(TrackFilterStoreContext)

     return (
          <section id="body-container">
               <section id="mood-weather-container">
                    {(SidebarStore.activeTab === 'Mood') && < Mood />}
                    {(SidebarStore.activeTab === 'Weather') && < Weather />}

               </section>

               <section id="button-container">
                    <button
                         className="create-playlist-button"
                         onClick={() => TrackFilterStore.createPlaylist()}>
                         CREATE PLAYLIST
                    </button>
               </section>

               <hr className="content-separator" />

               {TrackFilterStore.filteredTracks.map((track, index) => {
                    return (
                         < Track
                              key={index}
                              index={index + 1}
                              albumCover={track.album_cover}
                              artist={track.artist}
                              track={track.track}
                         />
                    )
               })}

          </section>
     );
})

export default Body;