import {
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions'



const initialState = {
    smurfs: [
        {
            name: '',
            age: 0,
            height: '',
            id: 0
        }
    ],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}