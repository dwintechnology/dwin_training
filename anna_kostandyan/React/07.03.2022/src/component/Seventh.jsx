import {useState} from "react"
function Seventh() {

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    return (
        <form >
            <input  type="text" value={name}onChange={(el) => setName(el.target.value)}/>
    
            <input type="text" value={surname}onChange={(el) => setSurname(el.target.value)} />
                
            <input type="button" onClick={(el) => {alert(`Hello ${name}  ${surname}`) }} />
        </form>
    )

}
export default Seventh;