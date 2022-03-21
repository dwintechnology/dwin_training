import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { useFetch } from "../hooks/useFetch"
function Kanye(){
    let [kan, setKan] = useState([])
    let [count, setCount] = useState(0);
    
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  // const data = useFetch();
  // console.log(data);

    useEffect(async() => {
       
        let u =  await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
        let b = await u.json();
        setKan(b)
        // console.log(kan)
      })
     
      
      let y = kan.map((i,id)=>{

          return (
            <div key={id} style={{width:"300px", height:"auto", backgroundColor:"#ccc", marginTop:"15px", textAlign:"center", borderRadius:"50px", color: '#fff'}}>
              <Link to={`/posts/${id}`}>
                  {/* <h1>Kanye West</h1> */}
                  {i}
              </Link>
              </div>
          )
      })
      return (
          <>
          <Button/>
        <h1>Are you here {count} seconds</h1>
          <div style={{display:"grid", gridTemplateColumns: "400px 400px 400px", marginLeft:"50px"}}>
              
              {y}
          </div>
          </>
      )
    
}
export default Kanye