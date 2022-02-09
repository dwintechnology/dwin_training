import { useState } from "react"
import './acardion.css'

function Acardion({ number }) {

    let [value, setValue] = useState(new Array(number).fill(1).map(()=> ['title', 'sssssssssssss', 'active']))



    return (
        <div>
            {value.map((el, i) =>
                <div key={i}>
                    <div style={{cursor:'pointer'}} onClick={()=>{
                        console.log(value)
                            let a = [...value];   
                            (a[i][2] == 'pasive') ?  a[i][2] = 'active' : a[i][2] = 'pasive'                            
                            setValue(a)

                    }}>{el[0]}</div>
                    <p className={el[2]} >{el[1]}</p>
                </div>
            )}
        </div>
    )
}

export default Acardion