import {useState} from 'react'

function Checked(){
    let [state, setState] = useState(false)
    let [stateed, setStateed] = useState(false)
    return (
        <>
        <h1> Are you a Citizen  :  {state ? <span>Yes</span> : <span>No</span>}</h1>
        <h1> Are you over 21   :  {stateed ? <span>Yes</span> : <span>No</span>}</h1>
        <label>Are you a Citizen ?</label>
        <input type="checkbox" onClick={(e)=>{
           setState(!state)
        }} /><br/>
       <label>Are you over 21 ?</label>
        <input type="checkbox" onClick={(e)=>{
           setStateed(!stateed)
        }} />
        </>
    )
} 
export default Checked