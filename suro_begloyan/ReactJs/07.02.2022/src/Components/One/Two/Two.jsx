import './Header.css';
import './Footer.css';
import {Three} from '../Two/Three/Three';



function Footer(props) {
    return (
        <div className='footer'>
            <Three value={props.value} remove={props.remove} itemsList={props.itemsList} />
        </div>
    )
}

export { Footer };