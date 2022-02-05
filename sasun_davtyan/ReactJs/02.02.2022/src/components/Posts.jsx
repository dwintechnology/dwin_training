import React, { useState, useEffect } from 'react';



function Posts() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    let [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
            .then(response => response.json())
            .then(json => {
                setList(json);
            })
    }, []);
    useEffect(() => {
        let id = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(id);
    });
    return (
        
        <div >
            <h1>You have been on this page for a {count} seconds  </h1>
            <input type="search" value={item} onChange={e => setItem(e.target.value)} />
            {
                list.filter((value) => value.includes(item)).map((element) => {
                    return true && (
                        <div key={element} className="elements" >
                            <h2 style={{ color: 'white' }}>
                                {element}
                            </h2>
                        </div>
                    )
                })
            }
        </div>
    )
}
export { Posts };
