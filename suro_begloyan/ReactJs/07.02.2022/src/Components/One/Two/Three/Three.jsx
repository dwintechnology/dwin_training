import './Three.css';
import { Four } from '../../Two/Three/Four/Four'
function Three(props) {
    return (
        <div className="three">
            <Four value={props.value} remove={props.remove} itemsList={props.itemsList} />
        </div>
    )
}

export { Three };