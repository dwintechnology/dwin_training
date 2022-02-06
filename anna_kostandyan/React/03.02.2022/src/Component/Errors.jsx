import { Link } from "react-router-dom";
function Errors(){
    return(
        <>
        <div style={{textAlign:"center", margin:"auto", width:"500px"}}>
        <h1>
        404
        </h1>
        <h2>
            Ooops!
        </h2>
        <h2>
            THAT PAGE DOES NOT EXIST OR IS UNAVAILABLE
        </h2>
        <button style={{backgroundColor:"blue", padding:"5px", textDecoration:"none"}}>
        <Link style={{ textDecoration:"none", color:"white"}} to={"/post"}>
            Go back to home
        </Link>
        </button>
        </div>
        </>
    )
}
export default Errors;