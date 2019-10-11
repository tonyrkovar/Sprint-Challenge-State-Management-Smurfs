import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const CREATE_SMURF_START = 'CREATE_SMURF_START'
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS'
export const CREATE_SMURF_FAIL = 'CREATE_SMURF_FAIL'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL'


export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const createSmurf = props => dispatch => {
    dispatch({ type: CREATE_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs', props)
        .then(res => {
            console.log('post response', res);
            dispatch({ type: CREATE_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: CREATE_SMURF_FAIL, payload: err.response }))
}

export const deleteSmurf = props => dispatch => {
    dispatch({ type: DELETE_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs', props)
        .then(res => {
            console.log('post response', res);
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: DELETE_SMURF_FAIL, payload: err.response }))
}