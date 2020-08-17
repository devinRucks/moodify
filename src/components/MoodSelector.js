import React, { useState, useEffect, useContext } from 'react';
import '../scss/mood-selector.scss';
import CustomSlider from '../components/CustomSlider'
import { GlobalContext } from '../GlobalContext';


const MoodSelector = () => {
     const { filterValues, setFilterValues } = useContext(GlobalContext)
     const [energyLvl, setEnergyLvl] = useState(0);
     const [happyLvl, setHappyLvl] = useState(0);

     useEffect(() => {
          setFilterValues({
               ...filterValues,
               valence: happyLvl,
               danceability: happyLvl / energyLvl,
               energy: energyLvl
          })
     }, [energyLvl, happyLvl])

     // Energy will directly affect energy levels
     // Happiness will directly affect valence
     // If low energy and low happiness, danceability will be below 0.5, above 0.5 if both are high



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
}

export default MoodSelector;