import { useState, useEffect } from "react"
import Comp1 from "./Comp1"
import Comp2 from "./Comp2"

function Level1(){
    let inValue 
    let [values, setValues] = useState()
    let [del, setDel] = useState()
    
        
            function removeAll(){
                del = []
            }
  
        
   
  
    return(
        <>
        
        <div style={{padding:"10px", border:"2px solid yellow"}}>
        <h1>LEVEL 1</h1>
            <Comp1 fu={setValues} fu1={removeAll}/>
            <Comp2 val={values} delete={setDel}/>
            
        </div>
        </>
    )
}
export default Level1