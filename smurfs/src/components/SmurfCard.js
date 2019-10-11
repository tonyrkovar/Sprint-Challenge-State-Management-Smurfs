import React from 'react';
import { useDispatch } from 'react-redux'

export const SmurfCard = props => {
    const dispatch = useDispatch();
    console.log('Card props', props)
    return (
        <div className='smurf-card'>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.height}</p>
            <p>{props.smurf.age}</p>
            <button>Delete</button>
        </div>
    )
}