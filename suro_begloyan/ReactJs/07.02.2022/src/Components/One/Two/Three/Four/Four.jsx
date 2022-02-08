import './Four.css';
import {Item} from './Five/Items';
function Four(props) {
    return (
        <div className="four">
            {
                props.itemsList.map((elem) => <Item key={elem.id} item={elem}  value={props.value} remove={props.remove} />)

            }
        </div>
    )
}

export { Four };