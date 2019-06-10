import { FETCH_QUESTION } from '../actions/types'

const initState = {
    isLoading: true,
    showing: false
}

export default function(state = initState, action) {
    switch (action.type) {
        case FETCH_QUESTION:
            return action.payload;
        default: 
            return state;
    }
}