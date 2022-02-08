import { Three } from './Three/Three'
function Two(props) {
    return (
        <div className="Two">
            <h2>Level 2</h2>
            <Three value={props.value} remove={props.remove} itemsList={props.itemsList} />
        </div>
    )
}
export { Two };