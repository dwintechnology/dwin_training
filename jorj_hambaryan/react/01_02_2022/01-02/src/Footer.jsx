import './Footer.css';
import  { useState } from 'react';


function Footer() {
    const [color, setColor] = useState('#8fa1a0');

    return (
        <div className="footer" style={{ backgroundColor: color }} onDoubleClick={() => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            randomColor = "#" + randomColor;
            setColor(randomColor);
        }}>
            <h1>FOOTER</h1>
        </div>

    )
}

// let foot = document.getElementById('footer');
// console.log(foot)
// foot.addEventListener('click',()=>{
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     randomColor = "#" + randomColor;
//     foot.style.backgroundColor = randomColor;
// })

export default Footer;