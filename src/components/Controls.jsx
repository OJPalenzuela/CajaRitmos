import React from 'react'
import '../styles/ControlStyle.css'
import { useName } from '../hooks/useName'

const Controls = () => {
    

    return (
        <div className="controls">
            <div>Power</div>
            <div>Slider</div>
            <div id="display"></div>
        </div>
    )
}

export default Controls
