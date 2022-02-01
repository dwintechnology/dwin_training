import './Foother.css'
function Foother(){
    return <footer >
        <h2>
            Welcome
        </h2>
        <img src="./logo-header (1).png" alt=""/>

        <h3>
            m.jinbahyan00@gmail.com
        </h3>
        <h4 onClick={modifyText}>
            clik me
        </h4>
        
      
    </footer>}
let o = document.querySelector('footer')
function modifyText(){
   let color = '#'
   color += Math.random().toString(16).slice(2,8)
   o.style.backgroundColor = color

}
export default Foother