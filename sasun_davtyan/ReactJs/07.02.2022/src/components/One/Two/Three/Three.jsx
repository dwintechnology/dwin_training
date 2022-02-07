import { Four } from './Four/Four'
function Three(props) {
    return (
        <div className="Three">
            <h2>Level 3</h2>
            <Four value={props.value}remove={props.remove} itemsList={props.itemsList}/>
        </div>
    )
}
export { Three };