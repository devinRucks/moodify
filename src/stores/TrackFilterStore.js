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
          this.valence = happiness;
          this.energy = energy;
          this.danceability = ((happiness + energy) / 2)

          console.log(`valence: ${this.valence}, energy: ${this.energy}, danceability: ${this.danceability}`)
     }



     createPlaylist() {
          const allTracks = JSON.parse(localStorage.getItem('tracks'))
          // console.log(allTracks)
          // let filteredTracks2 = allTracks.filter((track) => {
          //      inRange(track.valence, this.valence) &&
          //           inRange(track.energy, this.energy) &&
          //           inRange(track.danceability, this.danceability)
          // })
          let filteredTracks2 = allTracks.filter((track) => {
               return (
                    track.valence <= (this.valence + 0.300) && track.valence >= (this.valence - 0.300) &&
                    track.energy <= (this.energy + 0.300) && track.energy >= (this.energy - 0.300) &&
                    track.danceability <= (this.danceability + 0.300) && track.danceability >= (this.danceability - 0.300)
               )
          })
          console.log(filteredTracks2)
     }

     /**
      * TODO:
      * - Use this store for the create playlist button as well as weather component.
      * - For the create playlist button, when it is clicked, it will call function inside here that will use the current filterValues to filter out the tracks from localStorage and then return the array of objects, aka the custom playlist.
      * - For the weather component, it will have a similar function as setFilterValuesFromMood, but instead of taking in happiness and energy levels, it will take in the temp and current weather (sunny, rainy, snowy, etc).
      */

}

decorate(TrackFilterStore, {
     filterValues: observable,
     filteredTracks: observable,
     setFilterValuesFromMood: action,
     createPlaylist: action
})

const inRange = (trackVal, filterVal) => {
     return trackVal <= (filterVal + 0.400) && trackVal >= (filterVal - 0.400)
}

export const TrackFilterStoreContext = createContext(new TrackFilterStore());