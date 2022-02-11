import { useEffect, useRef, useState } from 'react'
import './checkListAll.css'


function CheckListAll() {
    const inputsRef = useRef()
    const all = useRef()
    const [arr,setValue] = useState([{title:'Arman', value: false}, {title:'Tigo', value: false},{title:'Anna', value: false},{title:'Sasun', value: false},{title:'Suro', value: false},{title:'Varuj', value: false},{title:'Mariam', value: false},{title:'Arman', value: false}])


    let dives = arr.map((el, i) => {
        return (
            <div key={i} className="checkboxBody">
                <p>{el.title}</p>
                <input checked={el.value} type="checkbox" onChange={()=>{
                    if(el.value == true){
                        el.value = false
                        let a = [...arr];
                        setValue(a)

                        let result = false;
                        a.forEach(el=>{
                            if(el.value == true){
                                result=true;
                            }
                        })
                        if(result == true){
                            all.current.checked = false;
                        }
                    }else{
                        el.value = true;
                        let b = [...arr];
                        setValue(b)
                        let res = true
                        b.forEach(el=>{
                            if(el.value == false){
                                res=false;
                            }
                        })
                        if(res == true){
                            all.current.checked = true;
                        }
                    }
                }}/>
            </div>
        )
    })


    return (
        <div className='CheckListAll'>
            <div className="checkboxBody">
                <p>SELECT All</p>
                <input ref={all} type="checkbox" onChange={(e)=>{
                     if(e.target.checked){
                        let a = arr.map(el=>{
                            el.value = true;
                            return el;
                        })
                        
                        setValue([...a])
                     }else{
                        let b = arr.map(el=>{
                            el.value = false
                            return el;
                        }) 
                        setValue(b)
                     }
                }}/>
            </div>

            {dives}

        </div>
    )
}

export default CheckListAll