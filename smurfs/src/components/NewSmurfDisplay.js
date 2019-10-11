import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SmurfCard } from './SmurfCard'

import { fetchSmurfs } from '../actions'

const NewSmurfDisplay = props => {
    console.log('this is props', props.smurfs)
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <SmurfCard smurf={smurf} />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(NewSmurfDisplay)