import "./header.css"

function Header(){
    const menu = ["Learn more", "About us", "Contanct with us", "help"]
    return(
        <div className="header">
            {menu.map(el => <button key={el} onClick={() => alert(el)} >{el}</button>)}
        </div>
    )
}

export default Header