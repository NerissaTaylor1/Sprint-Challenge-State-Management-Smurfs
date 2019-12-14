import React from 'react';


export default function Smurfs(props) {
    const { name, age, height, id } = props;
    return (
        <div>
            <h2>{props.smurfs.name}</h2>
            <p>{props.smurfs.age}</p>
            <p>{props.smurfs.height}</p>

        </div>
    )
}
