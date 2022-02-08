import React, { useState } from 'react';


function InputAndRemove(props) {
    const handleChange = (event) => {
        props.setName(event.target.value);
    }
    function handleClick() {
        props.setValue(props.name);
    }

    return (
        <div className="Inputs">
            <h3>Level 1</h3>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick} >Submit</button>
            <button onClick={props.removeAll}>Remove All</button>
            <button onClick={props.undo}>Undo</button>
        </div>
    )
}
export { InputAndRemove };