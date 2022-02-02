import { useState } from "react"
import "./footer.css"

function Footer(){
    let [color, setColor] = useState("red")
    let newColor = '#'
    newColor += Math.random().toString(16).slice(2,8)
    return(
        <div 
        style={{ backgroundColor :color}}
        onDoubleClick = {() => {setColor(newColor)} }
        >
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam optio alias esse dolore rerum sapiente. Itaque officia recusandae quaerat harum nihil debitis consectetur possimus, corporis sunt tenetur similique! Dicta, similique.</h3>

           
        </div>
    )
}

export default Footer