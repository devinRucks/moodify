import React, { useState, useEffect, useContext } from 'react';
import '../../scss/mood-selector.scss';
import CustomSlider from './CustomSlider'
import { TrackFilterStoreContext } from '../../stores/TrackFilterStore'
import { LoadingStoreContext } from '../../stores/LoadingStore'
import { observer } from 'mobx-react';
import Loading from '../Loading'


const MoodSelector = observer(() => {
     const TrackFilterStore = useContext(TrackFilterStoreContext)
     const LoadingStore = useContext(LoadingStoreContext)
     const [happyLvl, setHappyLvl] = useState(parseFloat(sessionStorage.getItem('happyLvl')) || 0.5);
     const [energyLvl, setEnergyLvl] = useState(parseFloat(sessionStorage.getItem('energyLvl')) || 0.5);


     useEffect(() => {
          sessionStorage.setItem('happyLvl', happyLvl.toString())
          sessionStorage.setItem('energyLvl', energyLvl.toString())

          TrackFilterStore.setFilterValuesFromMood(happyLvl, energyLvl)

          // eslint-disable-next-line
     }, [happyLvl, energyLvl])


     return (
          <React.Fragment>
               {LoadingStore.loadingTracks
                    ?
                    < Loading toLoad={"tracks"} />
                    :
                    <section id="mood-container">
                         <section className="y-axis-labels">
                              <div className="high-label">High</div>
                              <div className="low-label">Low</div>
                         </section>
                         <section className="x-axis-labels">
                              <div className="happiness-label">Happiness</div>
                              <div className="energy-label">Energy</div>
                         </section>

                         <CustomSlider
                              label="Happy"
                              value={happyLvl}
                              setValue={setHappyLvl}
                         />
                         <CustomSlider
                              label="Energy"
                              value={energyLvl}
                              setValue={setEnergyLvl}
                         />
                    </section>
               }
          </React.Fragment>
     );
})

export default MoodSelector;