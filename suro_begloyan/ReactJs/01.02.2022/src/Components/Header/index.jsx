import './Header.css';
import { HeaderItems } from '../../Constants';

function Header() {
    //const HeaderItems = ['Menu', 'Home', 'About', 'Contact'];
    return (
        <div className="Header">
            {HeaderItems.map(el => <button key={el} onClick={() => alert(el)} >{el}</button>)}
        </div>
    );
}

export { Header };