import React from 'react';
import '../scss/login.scss'

const Login = () => {
     return (
          <div id="login-container">
               <div id="main-info-container">
                    <section id="description-container">
                         <div className="title">Moodify</div>
                         <div className="description">Your interface for unique playlists, created from your mood or current weather!</div>
                         <div className="author">A project by Devin Rucks</div>
                    </section>
                    <section id="button-container">
                         {/* <a href="http://localhost:8888/login"> */}
                         <button className="login-button">LOGIN WITH SPOTIFY</button>
                         {/* </a> */}
                    </section>
               </div>
          </div>
     );
}

export default Login;