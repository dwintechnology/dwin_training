import { useEffect, useState } from "react"

export const useFetch = function(url){
    let [value,setValue] = useState([]);
    useEffect(()=>{
        const foo = async function(){
            let data = await fetch(url);
            data = await data.json();
            setValue(data);
        }
        foo()
    },[]);
    return value;
}