import { useState } from "react"
import './acardion.css'

function Acardion({ number }) {

    let [value, setValue] = useState(new Array(number).fill(1).map((el,i)=> [`title ${i}`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'pasive']))



    return (
        <div className="acardion">
            {value.map((el, i) =>
                <div key={i}>
                    <div style={{cursor:'pointer'}} onClick={()=>{
                            let c = [...value];
                            c.map((el,i)=>{el[2] = 'pasive'})
                            setValue(c)
                            let a = [...value];   
                            (a[i][2] == 'pasive') ?  a[i][2] = 'active' : a[i][2] = 'pasive';                    
                            setValue(a)
                    }}>{el[0]}</div>
                    <p className={el[2]} >{el[1]}</p>
                </div>
            )}
        </div>
    )
}

export default Acardion