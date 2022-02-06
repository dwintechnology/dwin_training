import { useParams } from "react-router"
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

function PostById() {
    const [state, setState] = useState()
    const[params,setParams]= useSearchParams()
    let color = params.get('color')
    let { index } = useParams()

    useEffect(async () => {
        let post = await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
        let p = await post.json()
        setState(p[index])
    }, [])
       return (
           <div style={{ color:`${color}`, width:"400px", heigth:"auto", border:`3px solid ${color}`, margin:"auto", marginTop:"40px", textAlign:"center"}}>
               <h2>
                   {state}
               </h2>
           </div>)
   

}
export default PostById