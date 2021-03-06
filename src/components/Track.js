import React from 'react';
import Fade from 'react-reveal/Fade';
import '../scss/track.scss';


const Track = (props) => {
     const { index, albumCover, artist, track } = props;

     return (
          <section id="track-container">
               <Fade top>
                    <div className="track-index">{index}</div>
                    <div className="album-cover" style={{ backgroundImage: "url(" + albumCover + ")" }}></div>
                    <section id="track-info-container">
                         <div className="track-name">{track}</div>
                         <div className="artist-name">{artist}</div>
                    </section>
               </Fade>
          </section>
     )
}

export default Track;