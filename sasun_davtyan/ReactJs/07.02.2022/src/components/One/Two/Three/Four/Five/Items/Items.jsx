
function Items(props) {
    return (
        <div className="Items">
            <div>
                <button onClick={()=>props.remove(props.item.id)}>X</button>
                </div>
            <div>
                <h1> {props.value} {props.item.title} {props.item.name}</h1>
                </div>
        </div>
    )
}
export { Items };