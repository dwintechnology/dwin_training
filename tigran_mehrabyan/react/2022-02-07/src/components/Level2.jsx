import Level3 from "./Level3";

function Level2({state, setState}){
    return(
        <div style={{border:"1px solid black", padding:"20px"}}>
            <h3>level 2</h3>
            <Level3 state={state} setState={setState} />
        </div>
    )
}

export default Level2;