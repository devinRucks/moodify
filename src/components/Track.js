import React from 'react';
import '../scss/track.scss';


const Track = (props) => {
     const { albumCover, artist, track } = props;

     return (
          <section id="track-container">
               <div className="album-cover" style={{ backgroundImage: "url(" + albumCover + ")" }}></div>
               <section id="track-info-container">
                    <div className="artist-name">{artist}</div>
                    <div className="track-name">{track}</div>
               </section>
          </section>
     )
}

export default Track;