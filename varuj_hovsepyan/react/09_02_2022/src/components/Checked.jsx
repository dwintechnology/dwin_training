import { useState } from "react"

function Checked(){
    let [state, setState] = useState(false)
    let [state2, setState2] = useState(false)
    return (
        <>
        <h1> Are you a Citizen  :  {state ? <span>Yes</span> : <span>No</span>}</h1>
        <h1> Are you over 21   :  {state2 ? <span>Yes</span> : <span>No</span>}</h1>
        <label>Are you a Citizen ?</label>
        <input type="checkbox" onClick={(e)=>{
           setState(!state)
        }}  name="" id=""/><br/>
       <label>Are you over 21 ?</label>
        <input type="checkbox" onClick={(e)=>{
           setState2(!state2)
        }}  name="" id=""/>
        </>
    )
}
export default Checked