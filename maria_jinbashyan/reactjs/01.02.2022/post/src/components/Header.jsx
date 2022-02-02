import "./Header.css"
function Header(){
return <div>
    <nav>
       
        <input id="id1" type="button" value="Prev" onClick={onClick1}/>
        <input id="id2" type="button" value="Menu" onClick={onClick2}/>
        <input id="id3" type="button" value="Contact" onClick={onClick3}/>
        <input id="id4" type="button" value="Next" onClick={onClick4}/>
    </nav>
</div>
function onClick1() {
    alert( document.getElementById("id1").value)
} 
function onClick2() {
    alert( document.getElementById("id2").value)
} 
function onClick3() {
    alert( document.getElementById("id3").value)
} 
function onClick4() {
    alert( document.getElementById("id4").value)
} 

}
export default Header