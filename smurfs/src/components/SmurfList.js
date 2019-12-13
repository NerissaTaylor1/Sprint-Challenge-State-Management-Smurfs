import React from 'react';
import { connect } from 'react-redux'
import { getSmurf } from '../actions/actions';



function SmurfList(props) {
    console.log("props.smurfs", props.smurfs)
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
    };
    return (
        <>
            <h2>Welcome to SmurfLand!</h2>
            <div>
                {props.smurfs && props.smurfs.map(smurf => (
                    <div key={smurf.id}>
                        <h4>{smurf.name}</h4>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                )
                )}
            </div>
            <div>
                {props.error && <p className="error">{props.error}</p>}
                <button onClick={fetchSmurf}>Fetch Smurf!</button>
            </div>
        </>
    );
};
const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
});
export default connect(
    mapStateToProps, { getSmurf })(SmurfList);
