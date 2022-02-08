import {useEffect, useState} from 'react'
function Link4(props){
    let value = props.va
    let [arr, setArr] = useState([])
    useEffect(()=>{
        setArr(props.delete)
    }, [props.delete])
    useEffect(()=>{
        
            let value2 = [value]
            setArr(arr.concat(value2))
           
    }, [value])
    if(arr[0]===undefined){
        arr.length=0
    }
    let k = arr.map((i, ii) => {
        return (
            <div  style={{border:"1px solid green"}}>
                <h1>
                    {i}
                </h1>
                <button onClick={()=>{
                    let es = [...arr]
                    es.splice(ii, 1)
                    setArr(es)

                }}
                
                >X</button>
            </div>
        )
    })
    return(
        <div style={{display:"grid", gridTemplateColumns: "auto auto auto "
    }}>
            <>
           {k}
            </>
        </div>
    )
}
export default Link4