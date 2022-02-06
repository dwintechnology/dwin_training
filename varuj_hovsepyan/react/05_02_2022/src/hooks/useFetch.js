import { useEffect, useState } from "react";

export  const  useFetch = (url, i) => {
    let [state, setState] = useState()
   useEffect( async() => {
       
        let url1 =  await fetch(url)
        let urlJson  = await url1.json();
        setState(urlJson[i])
      }, [])
      return (<>
        {state}
      </>)
}