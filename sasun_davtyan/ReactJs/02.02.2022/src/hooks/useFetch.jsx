import { useEffect, useState } from "react";

 const useFetch = (url) => {
    let [state, setState] = useState([]);
    useEffect(async() => {
        let temroraryJson = await fetch(url);
        let temroraryList = await temroraryJson.json();
        setState(temroraryList);
    }, [])
    return state;
}
export {useFetch}