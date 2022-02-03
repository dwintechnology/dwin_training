import { useState} from "react"
import {useRef} from "react"

function Data2(){
    const [state, setState] = useState("")
    const [state1, setState1] = useState("")
    const [error, setError] = useState("")
    const [error1, setError1] = useState("")
    let e={
        name:state,
        lastname:state1,
        error:error,
        error1:error1
    }
    const inputEl = useRef();
    const inputEl1 = useRef();
  const onButtonClick = () => {
    if(inputEl.current.value.length>5){
        // console.log(inputEl.current.value)
        setState(inputEl.current.value)
    }else{
        setError(inputEl.current.value )
    }
     if(inputEl1.current.value.length>5){
        // console.log(inputEl1.current.value)
        setState1(inputEl1.current.value)
    }else{
        setError1( inputEl1.current.value)
    }
  };
    return (
        <>
        <div style={{backgroundColor:"blue", width:"300px", height:"300px", border:"8px solid black"}}>
        <h2>
            {e.name}
        </h2>
        <h2>
            {e.lastname}
        </h2>
        </div>
       <div style={{backgroundColor:"black", color:"red", width:"300px", height:"300px", border:"8px solid yellow"}}>
       <h3>
            is ERROR {e.error}
        </h3>
        <h3>
            is ERROR {e.error1}
        </h3>
       </div>
        <label >Name</label> <br />
        <input ref={inputEl} type="text" /> <br />
        <label >Surname</label><br />
        <input ref={inputEl1} type="text" />
        <input onClick={onButtonClick} type="button" value="Button" />
        </>
    )
}
export default Data2