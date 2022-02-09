import { useParams, useSearchParams } from "react-router-dom";
import { useFetch } from "./useFetch/useFetch";


function UnicPosts(){
    let [color] = useSearchParams(); 
    let b = color.get('color')
    let {i} = useParams();
    console.log(useSearchParams())
    let j= useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json')
    let c = j[i];
    
    return (
        <div style={{backgroundColor:`${b}`}}>
             <h1>Kanye West Twitt</h1>
             <p>{c}</p>
        </div>
    )
}


export default UnicPosts