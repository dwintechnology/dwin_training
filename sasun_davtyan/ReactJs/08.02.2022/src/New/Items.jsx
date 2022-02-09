import React, { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [status, setStatus] = useState([{
        loading: false,
        data: undefined,
        error: undefined,
    }])
    function fetchNow(url, options) {
        setStatus({ loading: true })
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setTimeout(()=>{
                    setStatus({ loading: false, data: res })
                },5000)
                
            })
            .catch((error) => {
                setStatus({ loading: false, error: error })
            })
    }
    useEffect(() => {
        if (url) {
            fetchNow(url, options)
        };
    }, [])
    return { ...status, fetchNow }
};
export { useFetch };

