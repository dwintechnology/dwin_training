import { Link } from "react-router-dom";
import './header.css'
function Header() {

    return (
        <div className="Header">
            <Link to='/'>SliderSlow</Link>
            <Link to='/Counter'>Counter</Link>
            <Link to='/LoginForm'>LoginForm</Link>
            <Link to='/Slider'>Slider</Link>
            <Link to='/Acardion'>Acardion</Link>
            <Link to='/CheckList'>CheckList</Link>
            <Link to='/Search'>Search</Link>
            <Link to='/CheckListAll'>CheckListAll</Link>
        </div>
    )
}

export default Header