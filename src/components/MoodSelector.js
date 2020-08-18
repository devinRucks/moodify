import React, { useState, useEffect, useContext } from 'react';
import '../scss/moodSelector.scss';
import CustomSlider from '../components/CustomSlider'
import { TrackFilterStoreContext } from '../stores/TrackFilterStore'
import { observer } from 'mobx-react';


const MoodSelector = observer(() => {
     const trackFilterStore = useContext(TrackFilterStoreContext)
     const [happyLvl, setHappyLvl] = useState(0);
     const [energyLvl, setEnergyLvl] = useState(0);


     useEffect(() => {
          trackFilterStore.setFilterValuesFromMood(happyLvl, energyLvl)
          // eslint-disable-next-line
     }, [happyLvl, energyLvl])


     return (
          <section id="mood-selector-container">
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
     );
})

export default MoodSelector;