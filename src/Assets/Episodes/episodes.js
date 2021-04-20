


import Ivan from './ivan_outline.png';
import Jehron from './jehron_outline.png';
import Brantley from './brantley_outline.png';
import Alex from './alex_outline.png';

import IntroAudio from '../Audio/Intro_Final.mp3';
import JehronAudio from '../Audio/Jehron_Final.mp3';
import BrantleyAudio from '../Audio/Brantley.mp3';
import AlexAudio from '../Audio/Alex.mp3';

const Episodes = [
    {
        title: "The Start of Liderazgo",
        image: Ivan,
        guest: "Ivan Pineda-Dominguez",
        alt: "Ivan Pineda Outline",
        description: "In this episode Ivan Pineda-Dominguez, talks about the mission and purpose behind the Liderazgo podcast along with giving a brief history how it was created and the goals he hopes to accomplish through interviews with leaders from different industries and backgrounds. ",
        audio: "https://drive.google.com/file/d/12BJ_mSBYW0HdViq4P9bQxWmXfLVgSwKT/view?usp=sharing",
    },
    {
        title: "ColorStack",
        image: Jehron,
        guest: "Jehron Petty",
        alt: "Jehron Petty Outline",
        description: "Ivan sits down with Jehron Petty founder and CEO of ColorStack; a non-profit organization which helps 1000+ students of color across the country in pursuing Computer Science as a degree option. In this episode, Jehron talks about his time as a student leader at Cornell University and how his leadership led to the inception and later creation of ColorStack.",
        audio: JehronAudio,
    },
    {
        title: "National Society of Black Engineers",
        guest: "Brantley Lephart",
        image: Brantley,
        alt: "Brantley Lephart Outline",
        description: "Brantley Leaphart talks about his experience being the Chapter President of the National Society of Black Engineers at Brown University and the struggles behind leading a student organization during a global pandemic. Leaphart provides valuable insights into his definition of leadership and the responsibility a leader has towards their followers.",
        audio: BrantleyAudio,
    },
    {
        title: "Mosaic+",
        guest: "Alexander Stewart",
        image: Alex,
        alt: "Alex Stewart Outline",
        description: "Alex Stewart is a senior at Brown University double concentrating in Computer Science and Visa. In this episode, Alex talks about his experience having been a member of the Mosaic+ student organization and later becoming one of its co-coordinators helping Brown CS become more receptive for underrepresented minority students.",
        audio: AlexAudio,
    }

]


export default Episodes;