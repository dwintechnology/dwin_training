import React, { useState } from 'react';
import { CheckBox } from './CheckBox/CheckBoxApp'


const names = ['apple ', 'pinapple ', 'samsung ', 'xiaomi ', 'banana ']

function Count(props) {
    // const [item, setItem] = useState("");
    const [count, setcount] = useState(0);
    let color = 'gray'
    if (count > 0) {
        color = "green"
    } else if (count < 0) {
        color = "red"
    }
    return (
        <div className="body">
            <div className="count">

                <h1 style={{ color: `${color}`, fontSize: "100px" }}>{count}</h1>
                <button onClick={() => setcount(count - 1)} >-</button>
                <button onClick={() => setcount(count + 1)} > +</button>
            </div>
            <div className="checkBox">
                <CheckBox />
            </div>

            <div>
                {/* <h2>{props.item}</h2> */}
                {
                    props.item && names.filter((value) => value.includes(props.item))
                }
            </div>
            
        </div>
    )
}
export { Count };