import './App.css';

import Description from './components/description/description.component';
import Quotes from './components/quotes/quotes.component';
import AudioCards from './components/audio_card/audio_cards.component';
import lottie from 'lottie-web';
import React, { useEffect, createRef } from 'react';
import animation from './Animations/soundwave.json';
import { motion } from "framer-motion";


const App = () => {
  let animationContainer = createRef();

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
        <motion.div
          className="navigation"
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
         <Description> </Description>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
          <div className="animation-container" ref={animationContainer}/> 
        </motion.div>

      </header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <div className="quotes-container">
        <Quotes></Quotes>
      </div> 
      </motion.div>


      <div className="episode-wrapper">
        <motion.div
            className="navigation"
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <h2 className="episode-heading">Current Episodes</h2>
          </motion.div>
          <AudioCards />
      </div>

    </div>
  );
}
export default App;
