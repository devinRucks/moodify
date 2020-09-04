import React, { useContext } from 'react';
import '../../scss/content.scss';

import WeatherSelector from './WeatherSelector';
import CreatePlaylistButton from '../CreatePlaylistButton'
import Track from '../Track';
import { TrackFilterStoreContext } from '../../stores/TrackFilterStore';
import { observer } from 'mobx-react';

const Weather = observer(() => {
     const TrackFilterStore = useContext(TrackFilterStoreContext)

     return (
          <section id="body-container">
               <section id="mood-weather-container">
                    < WeatherSelector />
               </section>

               <section id="button-container">
                    < CreatePlaylistButton />
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

export default Weather;