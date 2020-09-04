import { observable, action, decorate } from 'mobx'
import { createContext } from 'react'

class LoadingStore {
     loadingWeather = false
     loadingCoords = false

     setWeatherLoading(loading) {
          this.loadingWeather = loading
     }

     setCoordsLoading(loading) {
          this.loadingCoords = loading
     }
}

decorate(LoadingStore, {
     loadingWeather: observable,
     loadingTracks: observable,
     loadingCoords: observable,
     setWeatherLoading: action,
     setCoordsLoading: action,
     setTracksLoading: action
})

export const LoadingStoreContext = createContext(new LoadingStore());