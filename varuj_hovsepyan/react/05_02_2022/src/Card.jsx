import {useState, useEffect} from 'react';
import { useParams} from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';

const Card = () => {
    let [searchParams, setsearchParams] = useSearchParams()

   let color = searchParams.get('color')
  
    let {id} = useParams()
    let [state, setState] = useState()
//    useEffect ( async() => {
       
//         let url1 =  await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
//         let urlJson  = await url1.json();
//         setState(urlJson[id])
//       }, [])
    let g = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json", id)
    return(
        <div style={{textAlign:"center", border:"2px solid black", height:"auto", width:"400px", margin:"auto", marginTop:"50px"}}>
        <div style={{color:`${color}`}}>
            <h2>
            {g}
            </h2>
           </div>
        <h2>Color text change in <span style={{color:`${color}`}}> {color}</span></h2>
        <div>
            Post id = {id}
        </div>
        </div>
    )
};

export default Card;