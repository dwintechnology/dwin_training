import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
 
function Post (){
    let[state, setState]=useState([ ])
    let[count,setCount]=useState(0)
    useEffect(() => {
        setInterval(() => {
          setCount((prev)=>prev+1) }, 1000);
      }, []);

    useEffect(async()=>{
        let post =await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
        let p= await post.json()

        setState(p)
     } )
     let mass=state.map((num, index)=>{ 
        return(
            <div key ={index} style={{width:"300px", height:"auto", borderRadius:"50px" ,textAlign:"center", backgroundColor:"pink", marginTop:"15px"}}>
               <Link to={`/post/${index}`}>
                  
                  {num}
              </Link>
            </div>
        )
    })
    return(
        <>
        <h1>
            Duq aystex eq {count} vayrkyan!
        </h1>
        <div style={{display:"grid",  gridTemplateColumns: "400px 400px 400px", marginLeft:"150px"}}>
            {mass}
        </div>
        </>
    )
   
}
export default Post