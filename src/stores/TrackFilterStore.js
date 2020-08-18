import { observable, action, decorate } from 'mobx'
import { createContext } from 'react'

class TrackFilterStore {
     filterValues = {
          valence: 0,
          energy: 0,
          danceability: 0
     }

     /**
      * Takes in the values
      * @param {float} happiness 
      * @param {float} energy 
      */
     setFilterValuesFromMood(happiness, energy) {
          this.valence = happiness;
          this.energy = energy;
          this.danceability = ((happiness + energy) / 2)

          console.log(`valence: ${this.valence}, energy: ${this.energy}, danceability: ${this.danceability}`)
     }

}

decorate(TrackFilterStore, {
     filterValues: observable,
     setFilterValuesFromMood: action
})

export const TrackFilterStoreContext = createContext(new TrackFilterStore());