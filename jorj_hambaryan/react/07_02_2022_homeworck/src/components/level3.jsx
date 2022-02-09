import { useEffect, useRef, useState } from "react"

function Level3(props){
    let [value, setValue] = useState([]);



    useEffect(()=>{
        if(value[0] == undefined){
            value.length = 0;
        }
        let v = [props.inputValue]
        setValue(value.concat(v))
        
    },[props.inputValue])


    useEffect(()=>{
        setValue(props.del)
    },[props.del])

    return(
        <div className="Level3" style={{border:'1px solid black', margin: '50px',display: 'flex', justifyContent: 'space-between',alignItems: 'center', padding: '10px', width: '100%', flexWrap: 'wrap'}}>
            {value.map((el,i)=>
              <div key={i} style={{width: '200px', height: '200px', border:'1px solid black',  margin: '50px', padding: '10px',alignItems: 'center',justifyContent: 'center', display: 'flex', position: 'relative'}}>
                  <h2>{el}</h2>
                  <button style={{position: 'absolute', top: '0', right: '0', border: 'none',backgroundColor: 'transparent', cursor: 'pointer',
                  }} onClick={()=>{
                    let c  = [...value]
                    c.splice(i,1);
                    setValue(c);
                    console.log(c)
                  }}>X</button>
              </div>
            )}
        </div>
    )
}

export default Level3