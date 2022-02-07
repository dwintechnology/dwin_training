import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

function Meow(){
    let [par,setPar]=useSearchParams()
    let color=par.get('color')
    let [post, setPost] = useState()
    let {id}=useParams()
    useEffect (async() => {
        let a = await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
        let b = await a.json()
        setPost(b[id])
        }, [])
    return(
        <h2 style={{color:`${color}`}}>{post}</h2>
            
        
    )
}
export default Meow
