import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingalePage(){
    const data = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
    const {id} = useParams();
    return (
        <h2 >{data[id]}</h2>
    )
}
export  {SingalePage};