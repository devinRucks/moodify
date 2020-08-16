import React, { useState } from 'react';
import '../scss/mood-selector.scss';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


const MoodSelector = () => {
     const [energyLvl, setEnergyLvl] = useState(0)
     const [happyLvl, setHappyLvl] = useState(0);

     const handleEnergyChange = (value) => {
          setEnergyLvl(value)
     }

     const handleHappyChange = (value) => {
          setHappyLvl(value)
     }

     // Energy will directly affect energy levels
     // Happiness will directly affect valence
     // If low energy and low happiness, danceability will be below 0.5, above 0.5 if both are high


     return (
          <section id="mood-selector-container">
               <div className="slider">
                    <Slider
                         min={0}
                         max={10}
                         value={energyLvl}
                         tooltip={true}
                         orientation="vertical"
                         onChange={handleEnergyChange}
                    />
               </div>
               <div className="slider">
                    <Slider
                         min={0}
                         max={10}
                         value={happyLvl}
                         tooltip={true}
                         orientation="vertical"
                         onChange={handleHappyChange}
                    />
               </div>

          </section>
     );
}

export default MoodSelector;