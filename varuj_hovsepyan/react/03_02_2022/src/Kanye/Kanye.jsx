import {useState, useEffect} from 'react';
function Kanye(){
    let [kan, setKan] = useState([])
    let [count, setCount] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setCount(count++);
    }, 1000);
  }, []);

    useEffect(async() => {
       
        let u =  await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
        let b = await u.json()
        setKan(b)
       
      })
     
      
      let y = kan.map((i)=>{
          return (
              <div style={{width:"300px", height:"auto", backgroundColor:"blue", marginTop:"15px", textAlign:"center", borderRadius:"50px"}}>
                  <h1>Kanye West</h1>
                  <h3>{i}</h3>
              </div>
          )
      })
      return (
          <>
        <h1>Are you here {count} seconds</h1>
          <div style={{display:"grid", gridTemplateColumns: "400px 400px 400px", marginLeft:"50px"}}>
              
              {y}
          </div>
          </>
      )
    
}
export default Kanye