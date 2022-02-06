import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingalePage(){
    let [parap, setParam] = useSearchParams();
    let color = parap.get("color")
    const data = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
    const {id} = useParams();
    return (
        <h2 style = {{color:`${color}`}}>{data[id]}</h2>
    )
}
export  {SingalePage};