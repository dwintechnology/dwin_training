import {useState} from 'react'

function NewChecked(){
    let [state, setState] = useState(false)
    let [stateed, setStateed] = useState(false)
    let [stateeed, setStateeed]=useState(false)
    let [select,setSelect]=useState(false)
    return (
     <>
        
        
        <input type="checkbox"  checked={state} onClick={(e)=>{
           setState(!state)
        }} />
      
       <br/>

        <input type="checkbox" checked={stateed} onClick={(e)=>{
           setStateed(!stateed)
        }} />
        <br/>
         <input type="checkbox" checked={stateeed} onClick={(e)=>{
           setStateeed(!stateeed)
        }} />
        <br/>
        <input  type="checkbox"  onClick={(e)=>{
            // <h3>Loading</h3>
           if(!state || !stateed || !stateeed )  {
            setState(true)
            setStateed(true)
            setStateeed(true)
           }
           else if(!state && !stateed && !stateeed ){
            setState(true)
            setStateed(true)
            setStateeed(true)
           
           }
           else if(state || stateed ||stateeed ){ 
           state   && setState(false)
           stateed && setStateed(false)
           stateeed && setStateeed(false)
          
            
           }
        }}/>
        </>
        )} 
export default NewChecked