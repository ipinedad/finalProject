import React from 'react';

import Episodes from '../../Assets/Episodes/episodes';
import AudioCard from './audio_card.component';

const AudioCards = () => {

    const episodes = Episodes.map(episode => {
        return (
        <AudioCard 
        title={episode.title}
        guest={episode.guest}
        image={episode.image}
        description={episode.description}
        audio={episode.audio}
        />
        )
        
    })
    return (
        episodes
    );
};
export default AudioCards;
