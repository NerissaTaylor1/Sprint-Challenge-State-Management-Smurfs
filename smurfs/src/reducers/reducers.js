import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURFS, REMOVE_SMURFS } from "../actions/actions";
export const initialState = {
    smurfs: [{
        name: "",
        age: "",
        height: "",
        id: ""
    }],
    isFetching: false,
    error: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADD_SMURFS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            };
        case REMOVE_SMURFS:
            return {
                ...state,
                smurfs: state.smurfs.filter((smurf) => !smurf.id)

            }
        // smurf.id !== action.payload.id

        default:
            return state;

    }
}
export default reducer;