import { Link } from "react-router-dom"

function NotFound(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h3>Ooops</h3>
            <p>THAT PAGE DOESN'T EXIST OR ANIVAILABLE</p>
            <button >
                <Link to="/">Go Back to Home</Link>
            </button>
        </div>
    )
}
export default NotFound