import React from 'react';
import '../scss/main-component.scss';

const MainComponent = (props) => {
     const { currentTab } = props;

     /**
      * TODO:
      * - If the current tab is mood, display mood selector component
      * - If the current tab is weather, display the weather component
      * - Button will stay the same for all props
      * - Add loading option for button (May not need, error message incase localStorage is empty may be better)
      * - Regardless of the tab, it will use the track component (takes props of artist, track, album, cover art). This will need to be mapped
      * - Home component will set local storage of entire song info.
      * 
      * 
      * - Weather Component:
      *   - Will make call to server to get current weather info.
      *   - When thats done, it will display weather graphic
      *   - Sends weather info to some function that get track details
      *   - Use redux to store track details. This same store will be used for the mood component.
      *   - When button here is clicked, it will take the current track details from the store use that to sort thru local storage.
      */

     return (
          <section id="container">
               <div id="test-text">This is the {currentTab} container</div>
          </section>
     );
}

export default MainComponent;