import React from 'react'
import Controls from '../components/Controls'
import DrumPad from '../components/DrumPad'
import '../styles/GlobalStyle.css'
const App = () => {
    return (
        <div id="drum-machine">
            <DrumPad />
            <Controls />
        </div>
    )
}

export default App
