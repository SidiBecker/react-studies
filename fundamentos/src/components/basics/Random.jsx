import React from 'react'

export default (props) => {

    const {min, max} = props;

    const random = Math.floor(Math.random() * (max - min + 1) + min);

    return (<>
        <p>Min value: {min} </p>
        <p>Max value: {max}</p>
        <h3>The random number is {random}</h3>
    </>)
}
