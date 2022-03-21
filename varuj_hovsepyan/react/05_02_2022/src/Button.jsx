function Button() {
    return (
        <>
            <div style={{ width: "100px", display: "flex", marginTop: "50px" }}>
                <button style={{ marginLeft: "500px" }}>
                    <a href='/posts' style={{ textDecoration: "none", color: "red" }}>Kanye</a>
                </button>
                <button style={{ marginLeft: "50px" }}>
                    <a href='/' style={{ textDecoration: "none", color: "blue" }}>Home</a>
                </button>
                <button style={{ marginLeft: "50px" }}>
                    <a href='/kim' style={{ textDecoration: "none", color: "orange" }}>Kim</a>
                </button>
                <button style={{ marginLeft: "50px" }}>
                    <a href='/child' style={{ textDecoration: "none", color: "orange" }}>Children</a>
                </button>

            </div>
        </>
    )
}
export default Button