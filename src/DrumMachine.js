import React from "react";
import DrumPad from "./DrumPad";
import { useState, useEffect } from "react";


function DrumMachine(){

    const drumData = [
        { id: 'clip1', key: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', description: 'Sound 1'  },
        { id: 'clip2', key: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' , description: 'Sound 2' },
        { id: 'clip3', key: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' ,description: 'Sound 3'},
        { id: 'clip4', key: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' ,description: 'Sound 4'},
        { id: 'clip5', key: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' ,description: 'Sound 5'},
        { id: 'clip6', key: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' ,description: 'Sound 6'},
        { id: 'clip7', key: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' ,description: 'Sound 7'},
        { id: 'clip8', key: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',description: 'Sound 8' },
        { id: 'clip0', key: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',description: 'Sound 9' },
    
    ]

    const [display, setDisplay] = useState("");
    const updateDisplay = (description) => {
        setDisplay(description);
    }
    const playSoundByKey = (event) => {
        const key = event.key.toUpperCase();
        const drum = drumData.find(d => d.key === key);
        if (drum) {
            const audio = document.getElementById(drum.key);
            audio.currentTime = 0;
            audio.play();
            updateDisplay(drum.description);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', playSoundByKey);

        return () => {
            window.removeEventListener('keydown', playSoundByKey);
        };
    }, []);

    
    


    
    return (
        <section id="drum-machine" className="drum-pannel">
            
            {drumData.map( drum => (
                
                <DrumPad
                key={drum.id} 
                clipID={drum.id} 
                letter={drum.key} 
                src={drum.src} 
                description={drum.description} 
                updateDisplay={updateDisplay} 
                />
            ))}

<div id="display" className="display-content">{display}</div>
            

        </section>
    );

}

export default DrumMachine;