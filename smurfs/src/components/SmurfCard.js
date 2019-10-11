import React from 'react';

export const SmurfCard = props => {
    console.log('Card props', props)
    return (
        <div className='smurf-card'>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.height}</p>
            <p>{props.smurf.age}</p>
        </div>
    )
}