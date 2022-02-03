import { useEffect, useState } from "react";
 
function Post (){
    let[state, setState]=useState([ ])
    let[count,setCount]=useState(0)
    useEffect(() => {
        setInterval(() => {
          setCount(count++);
        }, 1000);
      }, []);

    useEffect(async()=>{
        let post =await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
        let p= await post.json()

        setState(p)
     } )
     let mass=state.map((num)=>{ 
        return(
            <div style={{width:"300px", height:"auto", borderRadius:"50px" ,textAlign:"center", backgroundColor:"pink", marginTop:"15px"}}>
                <h1>
                    Kanye West 
                </h1>
                <h2>
                    {num}
                </h2>
            </div>
        )
    })
    return(
        <>
        <h1>
            Duq aystex eq {count} varkyan!
        </h1>
        <div style={{display:"grid",  gridTemplateColumns: "400px 400px 400px", marginLeft:"150px"}}>
            {mass}
        </div>
        </>
    )
   
}
export default Post