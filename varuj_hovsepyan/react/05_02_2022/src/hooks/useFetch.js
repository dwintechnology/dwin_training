import { useEffect, useState } from "react";

export  const  useFetch = (url) => {
    let [state, setState] = useState()
   useEffect( async() => {
       
        let url1 =  await fetch(url)
        let urlJson  = await url1.json();
        setState(urlJson)
      }, [])
      return (<>
        {state}
      </>)
}