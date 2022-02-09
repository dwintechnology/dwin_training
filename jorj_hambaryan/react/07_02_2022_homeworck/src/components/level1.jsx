import { useEffect, useRef } from "react"

function Header(props) {
    let value = useRef()

    return (
        <div className="Level1" style={{ border: '1px solid black', margin: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
            <input type="text" ref={value} />
            <button style={{ height: '45px', width: '200px' }} onClick={() => {
                props.setInputValue(value.current.value)
            }}>SUBMIT</button>
            <button style={{ height: '45px', width: '200px' }} onClick={()=>{
                props.setDel([]);
            }}>REMUVE ALL</button>
        </div>
    )
}

export default Header