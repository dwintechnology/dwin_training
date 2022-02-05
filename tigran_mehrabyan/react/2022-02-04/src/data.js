import { useEffect, useState } from "react";


function GetKanye(){
   
    let [state, setState] = useState([]);
    let [count, setCount] = useState(0);
    useEffect(async() => {
        let temp = await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json");
        let array = await temp.json();
        setState(array);

    }, [])

    useEffect(() => {
        setInterval(() => {
            setCount(count++)
        }, 1000)
    }, [])
    let element = state.map((el) => {
        return(
            <div  style = {{backgroundColor : "red", height:"auto", width:"300px", marginTop : "50px"}}>
                <h2>
                    Kanye West twit
                </h2>
                <h3>
                    {el}
                </h3>
            </div>
        )
    })
    return (
        <>

        <h2>{count}</h2>
        <div style={{display:"grid", gridTemplateColumns: "400px 400px 400px", marginLeft:"50px"}}

        >
            {element}
        </div>
        </>
    )
}
export default GetKanye