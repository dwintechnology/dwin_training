import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SinglePost(){
    let [parap, setParam] = useSearchParams();
    let color = parap.get("color")
    const data = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
    let {i} = useParams();
    return (
        <h2 style = {{color:`${color}`}}>{data[i]}</h2>
    )
}
export default SinglePost;