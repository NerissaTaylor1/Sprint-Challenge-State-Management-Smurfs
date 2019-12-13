import React, { useState } from 'react';
import { addSmurf } from "../actions/actions";
import { connect } from 'react-redux';
import axios from 'axios';

const SmurfForm = () => {
    const [newSmurf, setNewSmurf] = useState("");

    const addSmurf = smurf => {
        const newSmurf = {
            id: new Date(),
            name: '',
            age: '',
            height: ''
        }
        setNewSmurf([...this.state.smurfs], newSmurf)
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(newSmurf)
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleChanges = e => {
        setNewSmurf(e.target.value);
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input className="smurf"
                    type="text"
                    name={newSmurf}
                    value={newSmurf}
                    placeholder="Smurf name"
                    onChange={handleChanges} />
                <button onClick={addSmurf}>Add Smurf Now!</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};
export default connect(mapStateToProps, { addSmurf })(SmurfForm);