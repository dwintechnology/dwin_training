import Level4 from "./Level4";

function Level3({state, setState}){
    return(
        <div style={{border:"1px solid black", padding:"20px"}}>
            <h3>Level 3</h3>
            <Level4 state={state} setState={setState} />
        </div>
    )
}

export default Level3;