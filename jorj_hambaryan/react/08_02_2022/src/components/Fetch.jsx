import { useState, useEffect} from 'react';
import {useFetch} from './useFetch'

function Fetch(){
    let [value,setValue] = useState([]);
    // let [data,setData] = useState();
    let [error,setError] = useState(false);
    let [loading,seLoading] = useState('Loading');
    
    
    useEffect(()=>{
        const foo = async function(){
            try{
                let data = await fetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json');
                data = await data.json();
                setValue(data);
            }catch(err){
                setError('erorik')
            }
            

            seLoading(false)
        }
        setTimeout(()=>{
            foo()
        },3000)
        
    },[]);

    return(
        <>
        <h1>{error}</h1>
        <h1>{loading}</h1>
        <h1>{value}</h1>
        </>
    )
}
export default Fetch