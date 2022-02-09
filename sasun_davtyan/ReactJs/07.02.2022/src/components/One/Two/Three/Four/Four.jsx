import { Five } from './Five/Five'
function Four(props) {
    return (
        <div className="four">
            <Five value={props.value} remove={props.remove} itemsList={props.itemsList}/>
        </div>
    )
}
export { Four };