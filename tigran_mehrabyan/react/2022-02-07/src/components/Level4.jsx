import Item from "./Item";

function Level4({state, setState}){
    return(
        <div style={{border:"1px solid black", padding:"20px",  gridTemplateColumns: "auto auto auto"}}>
            <h3>Level 4</h3>
            <Item state={state} setState={setState} />
        </div>
    )
}

export default Level4;