
function Items(props) {
    return (
        <div className="Items">
            <div>
                <button onClick={()=>props.remove(props.item.id)}>X</button>
                <button onDoubleClick={()=>{<div>aaaaaa</div>}}>
                Edit</button>
                </div>
            <div>
                <h1>  {props.item.title} {props.item.name}</h1>
                <h2>{props.value}</h2>
                </div>
        </div>
    )
}
export { Items };