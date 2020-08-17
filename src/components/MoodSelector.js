import React, { useState } from 'react';
import '../scss/moodSelector.scss';
import CustomSlider from '../components/CustomSlider'


const MoodSelector = () => {
     const [energyLvl, setEnergyLvl] = useState(0);
     const [happyLvl, setHappyLvl] = useState(0);

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