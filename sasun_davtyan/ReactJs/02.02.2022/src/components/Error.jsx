import { Link } from "react-router-dom"

function Error() {
    return (
        <div>
            <h2 style={{ fontSize: "200px", fontWeight: "lighter" }}>404</h2>
            <h2 style={{ fontSize: "50px", fontWeight: "lighter", marginTop: "-100px" }}>Ooops!!</h2>
            <h2 style={{ fontSize: "30px", fontWeight: "lighter" }}>THAT PAGE DOESN'T EXIST OR ANIVAILABLE</h2>
            <button style={{ backgroundColor: "rgb(76, 76, 240)", width: "250px", height: "50px" }}>
                <Link style={{ color: "white", textDecoration: "none" }} to="/">Go Back to Home</Link>
            </button>
        </div>
    )
}
export { Error }