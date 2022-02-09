import { useEffect, useState } from "react"

function Item({state, setState}){
    if(!state.length){
        return <div></div>
    }  
    
    return(
        <div >
            {
                 state.map((el, i) => {
                    return(
                        <div key={i}  style={{border:"1px solid black"}} >
                            {el}
                            <button onClick ={() => {
                                let temp = [...state];
                                temp.splice(i, 1)
                                setState(temp)
                            }} >X</button>
                        </div>
                    )
                })
            }
        </div>
       
       
    )
   
}

export default Item

