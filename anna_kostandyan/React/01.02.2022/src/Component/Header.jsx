function Header(){
    return(
        <div className="Header">
              <ul>
                  
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
                
                
            </ul>
            <input id="butt" type="button" value="Press" onClick={onClick}/>
            
        </div>
    );
    function onClick() {
        alert( document.getElementById("butt").value)
    }
   
   
   
   
}
export default Header;