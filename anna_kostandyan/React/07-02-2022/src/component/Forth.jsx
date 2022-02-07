import { useState, useEffect } from "react"
function Forth() {
    let [count, setCount]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setCount((count)=>{return count +1})
        },1000)
    },[])
    return(
        <h1>{count}seconds</h1>
    )}
export default Forth;




























