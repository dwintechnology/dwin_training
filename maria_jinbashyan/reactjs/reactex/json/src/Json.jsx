function Json(){
    let arr=
        [
            {
                id: '1',
                setup: "Whats the best thing about a boolean?",
                punchline: "Even if you're wrong, you're only off by a bit"
            }
            ,

            {
                id: '2',
                setup: 'Why do programmers wear glasses?',
                punchline: 'Because they need to C#'
            }
        ]
        let json = arr.map((el)=>{
            return(
                <div>
                <h1>{el.setup}</h1>
                <p>{el.punchline}</p>
                </div>
            )
        })
        return(
        <div style={{display:"flex", marginLeft:"20px"}}>
           {json}
        </div>
            
        )
    
}
export default Json