import {useState, useEffect} from 'react';
import { useParams} from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Button from './Button';
import { useFetch } from './hooks/useFetch';
import Loading from './Loading';

const Card = () => {
    let [searchParams, setsearchParams] = useSearchParams()

   let color = searchParams.get('color')
  
    let {id} = useParams()
    let [state, setState] = useState()
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState("") 
    
   useEffect (() => {
       const  foo = async()=>{
        try{
            let url1 =  await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
        let urlJson  = await url1.json();
        setState(urlJson[id])
       
        }catch(er){
            setError(er.message)
            setLoading(true)
        }
        setLoading(false)
       }
       foo()
      }, [])
     
    // let g = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json", id)
    // function Data(){
    //     return(<>
    //         <h1>
    //             {state}
    //         </h1>
    //     </>)
    // }
    return(
       <>
        <Button/>
        <div style={{textAlign:"center", border:"2px solid black", height:"auto", width:"400px", margin:"auto", marginTop:"50px"}}>
        <div style={{color:`${color}`}}>
            <h2>
            {!!state&& state}
            {loading&& <h2>LOading</h2>}
            {!!error&& <h2>Error {error}</h2>}
            </h2>
           </div>
        <h2>Color text change in <span style={{color:`${color}`}}> {color}</span></h2>
        <div>
            Post id = {id}
        </div>
        </div>
       </>
        
    )
};

export default Card;