import { Link } from "react-router-dom"
function Error() {

    return (

        <>

            <div style={{ textAlign: "center", margin: "auto", width: "500px", }}>
               
                <img  src="https://www.reclamare.ua/wp-content/uploads/2017/06/giphy.gif"/>
                <button style={{ backgroundColor: "black", padding: "15px", borderRadius:"30px" }}>
                    <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                    HOME
                    </Link>
                </button>
            </div>
        </>)
}
export default Error