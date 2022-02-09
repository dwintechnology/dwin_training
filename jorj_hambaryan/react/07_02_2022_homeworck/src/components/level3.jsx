import { useEffect, useRef, useState } from "react"

function Level3(props){
    let [value, setValue] = useState([]);
    // let [delX, setDelX] = useState();
    // useEffect(()=>{
    //   console.log(delX)
    // },[delX])


    useEffect(()=>{
        if(value[0] == undefined){
            value.length = 0;
            // console.log(value)
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
                    let c  = value
                    c.splice(i,1);
                    setValue(c);
                  }}>X</button>
              </div>
            )}
        </div>
    )
}

export default Level3