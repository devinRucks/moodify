import { observable, action, decorate } from 'mobx'
import { createContext } from 'react'

class TrackFilterStore {
     filterValues = {
          valence: 0,
          energy: 0,
          danceability: 0
     }

     filteredTracks = [];

     /**
      * Takes in the happiness and energy levels from moodSelector component.
      * @param {float} happiness 
      * @param {float} energy 
      */
     setFilterValuesFromMood(happiness, energy) {
          this.valence = parseFloat(happiness.toFixed(3));
          this.energy = parseFloat(energy.toFixed(3));
          this.danceability = parseFloat(((happiness + energy) / 2).toFixed(3));

          console.log(`valence: ${this.valence}, energy: ${this.energy}, danceability: ${this.danceability}`)
     }



     createPlaylist() {
          const allTracks = JSON.parse(localStorage.getItem('tracks'))

          this.filteredTracks = this.filteringAlgorithm(allTracks)

     }


     filteringAlgorithm(tracks) {
          return tracks.filter((track) => {
               return (
                    valueFilter(track.valence, this.valence) &&
                    valueFilter(track.energy, this.energy) &&
                    valueFilter(track.danceability, this.danceability)
               )
          })
     }


     /**
      * TODO:
      * - Use this store for the create playlist button as well as weather component.
      * - For the create playlist button, when it is clicked, it will call function inside here that will use the current filterValues to filter out the tracks from localStorage and then return the array of objects, aka the custom playlist.
      * - For the weather component, it will have a similar function as setFilterValuesFromMood, but instead of taking in happiness and energy levels, it will take in the temp and current weather (sunny, rainy, snowy, etc).
      */

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
     filterValues: observable,
     filteredTracks: observable,
     setFilterValuesFromMood: action,
     createPlaylist: action
})



export const TrackFilterStoreContext = createContext(new TrackFilterStore());