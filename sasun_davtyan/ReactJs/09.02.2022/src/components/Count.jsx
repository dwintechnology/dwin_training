import React, { useState } from 'react';

const names = ['apple ', 'pinapple ', 'samsung ', 'xiaomi ', 'banana ']

function Count() {
    const [count, setcount] = useState(0);
    let color = 'gray'
    if (count > 0) {
        color = "green"
    } else if (count < 0) {
        color = "red"
    }
    return (
        <div className="count">
            <h1 style={{ color: `${color}` ,fontSize:"100px" }}>{count}</h1>
            <button onClick={() => setcount(count - 1)} >-</button>
            <button onClick={() => setcount(count + 1)} > +</button>
        </div >
    )
}
export { Count };