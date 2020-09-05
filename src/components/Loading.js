import React, { useContext } from 'react';
import HashLoader from "react-spinners/HashLoader";
import '../scss/loading.scss'
import { observer } from 'mobx-react';
import { LoadingStoreContext } from '../stores/LoadingStore'

const Loading = observer((props) => {
     const LoadingStore = useContext(LoadingStoreContext)

     return (
          <section id="loading-container">
               <section id="text-container">
                    {(LoadingStore.loadingCoords && props.toLoad === "weather") &&
                         <div className="loading-text">Getting Your Location...</div>
                    }
                    {(LoadingStore.loadingWeather && props.toLoad === "weather") &&
                         <div className="loading-text">Getting Weather Data...</div>
                    }
                    {(LoadingStore.loadingTracks && props.toLoad === "tracks") &&
                         <div className="loading-text">Getting Your Tracks...</div>
                    }
               </section>
               <HashLoader
                    loading={true}
                    color={'#1DB954'}
               />
          </section>
     )

})

export default Loading;