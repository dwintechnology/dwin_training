function Eighth(){
   const array=[
    
        {
            id: '1',
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: '2',
            setup: 'Why do programmers wear glasses?',
            punchline: 'Because they need to C#'
        }
    
   ]
   const marray=array.map((el)=>{
       return(
           <div>
               <h1>{el.setup}</h1>
               <h6>{el.punchline}</h6>
           </div>
       )
   })
   return(
       <div style={{display:"flex"}}>{marray}</div>
   )
}
export default Eighth;