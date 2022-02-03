import React, { useState, useEffect } from 'react';


function Posts() {
    const [list, setList] = useState([]);
    useEffect(() => {
        console.log('aaaaaa')
        fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
            .then(response => response.json())
            .then(json => {
                setList(json);
            })
    }, []);


    return (
        <div >
            {
                list.map((element) => {
                    return (
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
