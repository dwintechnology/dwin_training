import { Link, useNavigate } from "react-router-dom"
import React, { useEffect } from "react"

function Oops404(){
    let navigate = useNavigate();
    useEffect(() => {
      navigate('404');
    });
    return(
        <>

        {/* <div style={{position:"absolute", width:"600px", height:"80px",  top:"0", left:"350px", backgroundColor:"white"}}>

        </div> */}
        <div style={{textAlign:"center", margin:"auto", width:"500px"}}>
        <h1 style={{fontSize:"100px"}}>
        404
        </h1>
        <h2>
            Ooops!
        </h2>
        <h2>
            THAT PAGE DOES NOT EXIST OR IS UNAVAILABLE
        </h2>
        <button  style={{backgroundColor:"blue", border:"none", padding:"15px", textDecoration:"none"}}>
        <Link style={{ textDecoration:"none", color:"white"}} to={"/"}>
            Go back to home
        </Link>
        </button>
        </div>
        
        
        </>
    )
}
export default Oops404