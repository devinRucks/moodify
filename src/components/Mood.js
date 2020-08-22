import React, { useState, useEffect, useContext } from 'react';
import '../scss/mood.scss';
import CustomSlider from '../components/CustomSlider'
import { TrackFilterStoreContext } from '../stores/TrackFilterStore'
import { observer } from 'mobx-react';


const MoodSelector = observer(() => {
     const trackFilterStore = useContext(TrackFilterStoreContext)
     const [happyLvl, setHappyLvl] = useState(parseFloat(sessionStorage.happyLvl));
     const [energyLvl, setEnergyLvl] = useState(parseFloat(sessionStorage.energyLvl));


     useEffect(() => {
          console.log("test")

          sessionStorage.setItem('happyLvl', happyLvl.toString())
          sessionStorage.setItem('energyLvl', energyLvl.toString())

          trackFilterStore.setFilterValuesFromMood(happyLvl, energyLvl)

          // eslint-disable-next-line
     }, [happyLvl, energyLvl])


     return (
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
     );
})

export default MoodSelector;