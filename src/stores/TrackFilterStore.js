import { observable, action, decorate } from 'mobx'
import { createContext } from 'react'

class TrackFilterStore {
     moodFilterValues = {
          valence: 0,
          energy: 0,
          danceability: 0
     }
     weatherFilterValues = {
          valence: 0,
          energy: 0,
          danceability: 0
     }

     moodFilteredTracks = [];
     weatherFilteredTracks = [];

     /**
      * Takes in the happiness and energy levels from mood component.
      * @param {float} happiness 
      * @param {float} energy 
      */
     setFilterValuesFromMood(happiness, energy) {
          this.moodFilterValues.valence = parseFloat(happiness.toFixed(3));
          this.moodFilterValues.energy = parseFloat(energy.toFixed(3));
          this.moodFilterValues.danceability = parseFloat(((happiness + energy) / 2).toFixed(3));

          console.log(`valence: ${this.moodFilterValues.valence}, energy: ${this.moodFilterValues.energy}, danceability: ${this.moodFilterValues.danceability}`)
     }

     /**
      * Takes in weather object from state in Weather component
      * @param {Object} weather 
      */
     setFilterValuesFromWeather(weather) {
          if (weather.desciption === "Overcast") {
               this.weatherFilterValues.value = 0.2
               this.weatherFilterValues.energy = 0.2;
               this.weatherFilterValues.danceability = 0.2;
          } else {
               this.weatherFilterValues.value = 0.8;
               this.weatherFilterValues.energy = 0.8;
               this.weatherFilterValues.danceability = 0.8;
          }
     }


     createPlaylist(currentTab) {
          const allTracks = JSON.parse(localStorage.getItem('tracks'))

          if (currentTab === "mood") {
               this.moodFilteredTracks = this.filteringAlgorithm(allTracks, this.moodFilterValues)
          } else if (currentTab === "weather") {
               this.weatherFilteredTracks = this.filteringAlgorithm(allTracks, this.weatherFilterValues)
          }

     }


     filteringAlgorithm(tracks, filterValues) {
          return tracks.filter((track) => {
               return (
                    valueFilter(track.valence, filterValues.valence) &&
                    valueFilter(track.energy, filterValues.energy) &&
                    valueFilter(track.danceability, filterValues.danceability)
               )
          })
     }

}

// IDEA: Make filterValues toFixed(2) or even toFixed(1). The less specific these numbers are, the more results you should get.
const valueFilter = (trackVal, filterVal) => {
     if (filterVal < 0.100) {
          return (trackVal <= (0.300))
     }
     else if (filterVal < 0.200) {
          return (trackVal <= (0.450))
     } else {
          return (trackVal <= (filterVal + 0.250) && trackVal >= (filterVal - 0.250))
     }
}



decorate(TrackFilterStore, {
     moodFilterValues: observable,
     weatherFilterValues: observable,
     moodFilteredTracks: observable,
     weatherFilteredTracks: observable,
     setFilterValuesFromMood: action,
     setFilterValuesFromWeather: action,
     createPlaylist: action
})



export const TrackFilterStoreContext = createContext(new TrackFilterStore());