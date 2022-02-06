import { useEffect, useState } from "react";

export const useFetch = (url) => {
    let [state, setState] = useState([]);
    useEffect(async() => {
        let temp = await fetch(url);
        let array = await temp.json();
        setState(array);
    }, [])
    return state;
}