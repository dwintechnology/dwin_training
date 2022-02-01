import "./footer.css"
function Footer(){
    return <footer >
        <h4 >React</h4>
        <div className="footrDiv">
        
        <img src="./logo192.png" />
    </div>
    <h2 onClick={modifyText}>Change Background(Click Me)</h2>
    <h4>ESIM.am</h4>

    </footer>
}
let o = document.querySelector('footer')
function modifyText(){
   let color = '#'
   color += Math.random().toString(16).slice(2,8)
   o.style.backgroundColor = color
}
export default Footer