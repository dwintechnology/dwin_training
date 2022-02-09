import { useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import './PostsTwitt.css'

function KanyeWest(){

        const [value, setValue] = useState([]);
        useEffect(()=>{
            const fetchData = async () => {
                let twits = await fetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json');
                return await twits.json()
            }
            fetchData().then(twits => {
                setValue(twits.map((el,i)=>
                <Link to={`/Posts/${i}`}  key={i}>
                    <div className="kanyWestPosts">
                        <h1>Kanye West Twitt</h1>
                        <p>{el}</p>
                    </div>
                </Link>
            ))
            })
            fetchData()
        }, []);
    let [countValue, setCountValue] = useState(0)
        useEffect(()=>{
          setInterval(()=>{
            setCountValue(countValue++)
          },1000)
        },[])
    
       
   return (
    <div className="KanyeWestTwits"> 
        <div><h3>{countValue}</h3></div>
        {value}
    </div>

       )
}

export default KanyeWest