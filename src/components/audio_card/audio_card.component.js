import { motion } from 'framer-motion';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './audio_card.styles.css';


const AudioCard = (props) => {
    return (
        <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >

        <div className="audio-card-wrapper">
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <img src={props.image} alt={props.alt} className="thumbnail"/>
            </motion.div>
            <div className="description-wrapper">

                <div className="description">
                    <h3 className="title">{props.title}</h3>
                    <h4 className="subheading">{props.guest}</h4>
                    <p>{props.description}</p>
                </div>

                <ReactAudioPlayer
                className="audio-player"
                src={props.audio}
                controls
                />
            </div>
            
        </div>
        </motion.div>
    );
};
export default AudioCard;
