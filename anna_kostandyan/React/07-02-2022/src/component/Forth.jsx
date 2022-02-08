import { useState, useEffect } from "react"
function Fourth(){
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    )
}



// function Forth() {
//     let [count, setCount]=useState(0);
//     useEffect(()=>{
//         setInterval(()=>{
//             setCount((count)=>{return count +1})
//         },1000)
//     },[])
//     return(
//         <h1>{count}seconds</h1>
//     )}
export default Fourth;




























