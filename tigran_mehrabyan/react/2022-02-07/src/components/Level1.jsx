import { useState } from "react";
import Header from "./Header";
import Level2 from "./Level2";

function Level1(){
    let [state, setState] = useState([]);
    let temp = [state]
;    return(
        <div style={{border:"1px solid black", padding:"20px", textAlign:"center"}}>
            <h3>Level 1</h3>
            <Header setState={setState} state={state}/>
            <Level2 state={state} setState={setState}/>
        </div>
    )
}

export default Level1;