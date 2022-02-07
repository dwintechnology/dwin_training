import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'



function Posts() {
    let [count, setCount] = useState(0);

    const data = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")

    useEffect(() => {
        let id = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(id);
    });
    return (

        <div >
            <h1>{count}</h1>
            {
                data.map((element, index) => {

                    return (
                        <div key={index} className="elements" >
                            <Link to={`/posts/${index}/title`}>
                                <h2 style={{ color: 'white' }}>
                                    {element}
                                </h2>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export { Posts };

