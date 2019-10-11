import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { createSmurf } from '../actions'



const SmurfForm = props => {
    const dispatch = useDispatch()
    const [inputData, setInputData] = useState({
        name: '',
        height: '',
        age: 0
    })


    const monitorInput = e => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }
    return (
        <div className='smurf-form'>
            <input
                type='text'
                name='name'
                placeholder='Name?'
                onChange={monitorInput}
            />
            <input
                type='text'
                name='height'
                placeholder='Height?'
                onChange={monitorInput}
            />
            <input
                type='number'
                name='age'
                placeholder='Age?'
                onChange={monitorInput}
            />
            <button onClick={() => dispatch(createSmurf(inputData))}>Submit Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default SmurfForm;