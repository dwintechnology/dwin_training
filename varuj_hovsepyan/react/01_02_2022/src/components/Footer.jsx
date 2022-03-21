import "./footer.css"
import {useState} from "react"
function Footer() {
    let color2 = '#'
    color2 += Math.random().toString(16).slice(2,8)
     const [color, setColor] = useState("red");
     const [state, setState] = useState("")
    return (
        <footer onDoubleClick={() => setColor(color2)} style={{backgroundColor:color}}>
            <h4 >React</h4>
            <div className="footrDiv">

                <img src="./logo192.png" />
            </div>
          
            <h4>ESIM.am</h4>
            
    
      
      <h2>{state}</h2>
       <input type="text" value={state} onChange={(ev)=>{
           setState(ev.target.value)
       }} />
        </footer>
    )
   
}

export default Footer