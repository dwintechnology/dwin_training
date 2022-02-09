import { useState } from "react"

function Search(){
let arr = ['Hakob', 'Tigran', 'Araman', 'Sasun', 'Anna']
const [value, setValue] = useState()
let arrFilter = arr?.filter((el)=>{
    el = el.toLowerCase()
    return el.includes(value?.toLowerCase())});


    return(
        <div>
            <input type="text" value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}/>
           <h1 style={{fontSize: '66px'}}>{arrFilter}</h1>
           {arr?.map((el,i)=><p key={i}>{el}</p>)}
        </div>
    )
}

export default Search