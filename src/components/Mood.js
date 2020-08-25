import React, { useState, useEffect, useContext } from 'react';
import '../scss/mood.scss';
import CustomSlider from '../components/CustomSlider'
import { TrackFilterStoreContext } from '../stores/TrackFilterStore'
import { observer } from 'mobx-react';


const MoodSelector = observer(() => {
     const trackFilterStore = useContext(TrackFilterStoreContext)
     const [happyLvl, setHappyLvl] = useState(parseFloat(sessionStorage.getItem('happyLvl')) || 0.5);
     const [energyLvl, setEnergyLvl] = useState(parseFloat(sessionStorage.getItem('energyLvl')) || 0.5);
     // const [happyLvl, setHappyLvl] = useState(0.5);
     // const [energyLvl, setEnergyLvl] = useState(0.5);


     useEffect(() => {

          sessionStorage.setItem('happyLvl', happyLvl.toString())
          sessionStorage.setItem('energyLvl', energyLvl.toString())

          // setHappyLvl(parseFloat(sessionStorage.happyLvl))
          // setEnergyLvl(parseFloat(sessionStorage.energyLvl))

          // console.log(`happyLvl: ${sessionStorage.happyLvl}`)
          // console.log(`energyLvl: ${sessionStorage.energyLvl}`)

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