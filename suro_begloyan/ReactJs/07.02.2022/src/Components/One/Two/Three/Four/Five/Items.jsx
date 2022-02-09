import './Items.css'

function Item(props){
    return (
        <div className="item">
            <div>
                <button onClick={()=>props.remove(props.item.id)}>X</button>
                </div>
            <div>
                <h1> {props.value} {props.item.title} {props.item.name}</h1>
                </div>
        </div>
    )
}

export {Item};