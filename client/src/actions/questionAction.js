import { FETCH_QUESTION } from "./types";

export const fetchQuestion = () => {
    return dispatch => {
        dispatch({ type: FETCH_QUESTION, payload: {loading: false, showing: true} });
    };
};
