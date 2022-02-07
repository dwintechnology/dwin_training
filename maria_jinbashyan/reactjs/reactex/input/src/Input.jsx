import { useState } from "react";

function Inpute(){
    const[name,SetName]=useState()
    const[surname,SetSurname]=useState()
    return(
        <form>
            <input type="text"
            onChange={(e)=>{SetName(e.target.value)}}
            value={name}/>
            
            <input type="text"
            onChange={(e)=>{SetSurname(e.target.value)}}
            value={surname}/>

            <input onClick={()=>{
                alert (`Hello! ${name} ${surname}`)
            }} type="submit"/>

            </form>
    )
}
export default Inpute