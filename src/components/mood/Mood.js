import React, { useContext } from 'react';
import '../../scss/content.scss';

import MoodSelector from './MoodSelector';
import CreatePlaylistButton from '../CreatePlaylistButton'
import Track from '../Track';
import { TrackFilterStoreContext } from '../../stores/TrackFilterStore';
import { LoadingStoreContext } from '../../stores/LoadingStore'
import { observer } from 'mobx-react';
import Loading from '../Loading'


const Mood = observer(() => {
     const TrackFilterStore = useContext(TrackFilterStoreContext)
     const LoadingStore = useContext(LoadingStoreContext)

     return (
          <section id="body-container">
               <section id="mood-weather-container">
                    < MoodSelector />
               </section>

               <section id="button-container">
                    < CreatePlaylistButton currentTab={"mood"} />
               </section>

               <hr className="content-separator" />

               {LoadingStore.loadingTracks
                    ?
                    < Loading toLoad={"tracks"} />
                    :
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
               }

          </section>
     );
})

export default Mood;