import { useEffect, useState } from "react"

function Counter(){
    const [value, setValuer] = useState(0);
    const [str, setStr] = useState()

    useEffect(()=>{
        if(value > 0){
            setStr('green') 
            console.log(str)
        }else if(value < 0){
            setStr('red')
        }else{
            setStr('#efefef')
        }
    },[value])

    return(
        <div>
            <h1 style={{color: `${str}`}}>{value}</h1>
            <button style={{width: '50px', height: '50px', borderRadius: '50%', border: 'none', fontSize: '41px'}}  onClick={()=>{setValuer(value - 1)}}>-</button>
            <button style={{width: '50px', height: '50px', borderRadius: '50%', border: 'none', fontSize: '41px'}}  onClick={()=>{setValuer(value + 1)}}>+</button>
        </div>
    )
}

export default Counter