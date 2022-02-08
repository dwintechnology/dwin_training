function Comp(props){
    return (
        <div>
            <button onClick={()=>{alert(props.name)}} > {props.name}</button>
            
        </div>
    )
}
export default Comp