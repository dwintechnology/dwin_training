import React, { useState } from 'react';

 const names = ['apple ', 'pinapple ', 'samsung ' , 'xiaomi ', 'banana ' ]

function Search() {
    const [item, setItem] = useState("");
    // console.log(item)
    return (
        <div >
            <input type="search" value={item} onChange={e => setItem(e.target.value)} />
            {/* <h2>{list}</h2> */}
            {
               item && names.filter((value)=> value.includes(item))
            }
        </div>
    )
}
export { Search };