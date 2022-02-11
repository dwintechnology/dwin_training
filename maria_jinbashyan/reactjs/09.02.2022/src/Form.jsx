import {  useEffect, useRef, useState } from "react"
function Login() {
    let [getname, setGetname] = useState()
    let [bul, setBul] = useState(false)
    let [bul1, setBul1] = useState(false)
    const inputEl = useRef();
    const inputEl1 = useRef();
    let arr = [{
        name: "Mukuch",
        password:"Makich1980"
    },
    {
        name: "Valod",
        password:"Valod1856"
    }
    ]
    
    
    


    return (
        <div style={{display:"flex", justifyContent:"center", }}>
            <div style={{width:"400px", backgroundColor:"white", border:"2px solid yellow",paddingLeft:"80px"}}>
            <h1>Login</h1>
            <h5 style={{color:"gray"}}>Name:</h5>
        <input style={{display:"block"}}  ref={inputEl} type="text" />
        <h5 style={{color:"gray"}}>Password:</h5>
        <input style={{display:"block"}}  type="password" ref={inputEl1}/>
        <input style={{marginTop:"20px", fontSize:"20px", padding:"5px 30px", cursor:"progress", borderRadius:"20px", backgroundColor:"yellow"}}  onClick={()=>{
             arr.map((i)=>{
                if(i.name===inputEl.current.value && i.password===inputEl1.current.value){
                    setBul(true)
                    setGetname(i.name)
                }
                setBul1(true)
                    })
        }} type="button" value="Login" />
        <div>{bul ? <h1>WELCOME {getname}</h1>:bul1?<h2>ERROR Name or Password</h2>:null}</div>
        </div>
        </div>
    )
}
export default Login