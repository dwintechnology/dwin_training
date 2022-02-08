import { useRef } from "react";

function Header(props){
    let ref = useRef();
    return(
        <div style={{border:"1px solid black", display:"flex", justifyContent:"center", marginBottom:"50px"}}>
            <input ref = {ref} type="text"  />
            
            <button onClick={() => {
                 
               props.setState([...props.state,ref.current.value])
               ref.current.value=""
            }} style={{marginLeft:"30px", marginRight:"30px"}}>Submit</button>
            <button onClick={() => {
                ref.current.value=""
                props.setState([])
            }} >Remove all</button>
        </div>
    )
}

export default Header;