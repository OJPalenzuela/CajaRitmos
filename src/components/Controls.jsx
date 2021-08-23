import React from 'react'
import '../styles/ControlStyle.css'
import { useSelector } from 'react-redux'

const Controls = () => {
    
    const {name} = useSelector(store => store.name)

    return (
        <div className="controls">
            <div id="display">{name.name}</div>
        </div>
    )
}

export default Controls
