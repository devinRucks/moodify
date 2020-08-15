import React, { useState } from 'react';
import '../scss/mood-selector.scss';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


const MoodSelector = () => {
     const [energyLvl, setEnergyLvl] = useState(0)
     const [sadLvl, setSadLvl] = useState(0);
     const [happyLvl, setHappyLvl] = useState(0);
     const [calmLvl, setCalmLvl] = useState(0);

     const handleEnergyChange = (value) => {
          setEnergyLvl(value)
     }

     const handleHappyChange = (value) => {
          setHappyLvl(value)
     }

     const handleSadChange = (value) => {
          setSadLvl(value)
     }


     const handleCalmChange = (value) => {
          setCalmLvl(value)
     }

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

               <div className="slider">
                    <Slider
                         min={0}
                         max={10}
                         value={sadLvl}
                         tooltip={true}
                         orientation="vertical"
                         onChange={handleSadChange}
                    />
               </div>

               <div className="slider">
                    <Slider
                         min={0}
                         max={10}
                         value={calmLvl}
                         tooltip={true}
                         orientation="vertical"
                         onChange={handleCalmChange}
                    />
               </div>
          </section>
     );
}

export default MoodSelector;