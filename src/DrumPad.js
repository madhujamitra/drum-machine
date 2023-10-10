import React from "react";


function DrumPad({clipID , letter, src, description , updateDisplay}){

    const playSound = () => {
        const music = document.getElementById(letter);
        music.currentTime = 0;
        music.play().then(() => {
            
          }).catch(error => {
            console.log("Playback failed because:", error);
          });
        updateDisplay(description);
    }


    return (
<div className="drum-pad" id={clipID} onClick={playSound}>
    {letter}
    <audio src={src} className="clip" id={letter}></audio>
</div>
    );

}
export default DrumPad;