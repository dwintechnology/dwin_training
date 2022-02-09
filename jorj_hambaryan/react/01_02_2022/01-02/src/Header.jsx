import './Header.css';
import {MenuButtonsText} from './constans.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className='Header'>
            {MenuButtonsText.map(el => 
               <Link to={el} key={el}> <button>{el}</button></Link>
            )}
        </div>
    )
}

export default Header;