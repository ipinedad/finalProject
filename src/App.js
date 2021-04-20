import './App.css';

import Description from './components/description/description.component';
import Quotes from './components/quotes/quotes.component';
import AudioCards from './components/audio_card/audio_cards.component';
import lottie from 'lottie-web';
import React, { useEffect, createRef } from 'react';
import animation from './Animations/soundwave.json';

const App = () => {
  let animationContainer = createRef();
  console.log(animationContainer)
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    anim.setSpeed(0.15);
    return () => anim.destroy();
  }, []); 

  return (
    <div className="App">

      <header className="App-header">
        <Description> </Description>
        <div className="animation-container" ref={animationContainer}/>
      </header>

      <div className="quotes-container">
        <Quotes></Quotes>
      </div>

      <div className="episode-wrapper">
        <h2>Current Episodes</h2>
        <AudioCards />
      </div>

    </div>
  );
}
export default App;
