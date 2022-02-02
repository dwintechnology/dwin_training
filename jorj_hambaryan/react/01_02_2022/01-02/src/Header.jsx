import './Header.css';
import {MenuButtonsText} from './constans.js'

function Header() {
    return (
        <div className='Header'>
            {MenuButtonsText.map(el => <button key={el} onClick={() => alert(el)} >{el}</button>)}
        </div>
    )
}

export default Header;