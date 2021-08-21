import { useState } from 'react';
 
export const useName = ( initialState = {} ) => {
    
    const [name, setName] = useState(initialState);
    
    const reset = () => {
        setName( initialState );
    }
 
    const handleInputChange = ({ target }) => {
        setName({
            name: target.querySelector('audio').id
        });
    }
 
    return [name, handleInputChange, reset ];
}
