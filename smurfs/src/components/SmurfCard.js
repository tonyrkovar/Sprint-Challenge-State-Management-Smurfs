import React from 'react';
import { useDispatch } from 'react-redux'

import { deleteSmurf } from '../actions'

export const SmurfCard = props => {
    const dispatch = useDispatch();
    console.log('Card props', props)
    return (
        <div className='smurf-card'>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.height}</p>
            <p>{props.smurf.age}</p>
            <button onClick={() => dispatch(deleteSmurf(props.smurf.id))}>Delete</button>
        </div>
    )
}