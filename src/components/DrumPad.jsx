import React from 'react'
import '../styles/DrumStyles.css'
import { useName } from '../hooks/useName'

const DrumPad = () => {
    const [name, handleInputChange, reset] = useName({
        nombre: ""
    })

    const handleClick = (e) => {
        handleInputChange(e);
        const audio = e.target.querySelector('audio');
        audio.load()
        audio.play()

        
    }

    return (
        <div className="drum">
            <div className="drum-pad" onClick={handleClick} id="Q-pad">
                <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</div>

            <div className="drum-pad" onClick={handleClick}>
                <audio className="clip" id="W" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3"></audio>W</div>

            <div className="drum-pad" onClick={handleClick}>
                <audio className="clip" id="E" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3"></audio>E</div>

            <div className="drum-pad" onClick={handleClick}>
                <audio className="clip" id="A" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3"></audio>A</div>
            
            <div className="drum-pad" onClick={handleClick}>
                <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>S</div>
            
            <div className="drum-pad" onClick={handleClick}>
                <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>D</div>

            <div className="drum-pad" onClick={handleClick}>
                <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>Z</div>
            
            <div className="drum-pad" onClick={handleClick}>
                <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>X</div>
            
            <div className="drum-pad" onClick={handleClick}>
                <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>C</div>
            </div>
    )
}

export default DrumPad
