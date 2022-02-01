import './header.css'
function Header(){
    return <div className='k'>
        <nav>
            
            <input id='elem1' type="button" value="Menu" onClick={modifyText}/>
            <input id='elem2' type="button" value="B" onClick={modifyText2}/>
            <input id='elem3' type="button" value="Close" onClick={modifyText3}/>
            <input id='elem4' type="button" value="Continue" onClick={modifyText4}/>
        </nav>
    </div>
}

function modifyText(){
    alert(document.getElementById('elem1').value)
}
function modifyText2(){
    alert(document.getElementById('elem2').value)
}
function modifyText3(){
    alert(document.getElementById('elem3').value)
}
function modifyText4(){
    alert(document.getElementById('elem4').value)
}
export default Header