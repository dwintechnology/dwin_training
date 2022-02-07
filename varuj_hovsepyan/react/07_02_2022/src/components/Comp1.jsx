import { useEffect, useRef } from "react"

function Comp1(props){
    let ref = useRef()
    
    return(
        <div style={{border:"2px solid red", padding:"10px"}}>
          
            <input ref={ref} />
            
            <button onClick={
                ()=>{
                    props.fu( ref.current.value)
                }
            } >Sumbit</button>
        <button  onClick={
                
                    useEffect(()=>
                    props.fu1(), [])
                
            }
        >Remove</button>
        
        </div>
    )
}
export default Comp1