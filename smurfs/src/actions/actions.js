import axios from 'axios';
//action types
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURFS = 'ADD_SMURFS';
export const REMOVE_SMURFS = 'REMOVE_SMURFS';

//action creator

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.response })
        })
};

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURFS });
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res.data)
            dispatch({ type: ADD_SMURFS, payload: res.data })
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })

        .catch(err => {
            console.log(err);
        });
}

// export const removeSmurfs = smurf => dispatch => {
//     return { type: 'REMOVE_SMURFS', payload: smurf }
// }

// export const  removeSmurf=(smurf) => dispatch =>{
//     dispatch({type: REMOVE_SMURFS});
//       axios.delete('/smurfs').then(() => {
//         console.log(`Deleted ${smurf.id}`)

//         return;
//       }).catch(err => {
//           dispatch({REMOVE_SMURFS_FAILURE,payload:err.response})

//       })
//     }