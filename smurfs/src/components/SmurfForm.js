import React from 'react';

const SmurfForm = () => {
    return (
        <div className='smurf-form'>
            <input
                type='text'
                name='name'
                placeholder='Name?'
            />
            <input
                type='text'
                name='height'
                placeholder='Height?'
            />
            <input
                type='number'
                name='age'
                placeholder='Age?'
            />
        </div>
    )
}

export default SmurfForm;