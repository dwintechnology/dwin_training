import {useEffect, useState} from 'react'
function Link4(props){
    let value = props.va
    let [arr, setArr] = useState([])
    props.delete(arr)
    useEffect(()=>{
            arr.push(value)
    }, [value])
   
    let k = arr.map((i)=>{
        return (
            <div style={{border:"1px solid green"}}>
                <h1>
                    {i}
                </h1>
            </div>
        )
    })
    return(
        <div>
            <>
           {k}
            </>
        </div>
    )
}
export default Link4