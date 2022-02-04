
import {useState, useEffect} from 'react';
function Post(){
let [post, setPost] = useState([])
let [state, setState] = useState(0);
useEffect(() => {
setInterval(() => {
setState(state++);
}, 1000);
}, []);
useEffect(async() => {
let a = await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
let b = await a.json()
setPost(b)
})
let y = post.map((i)=>{
return (
<div style={{width:"300px", height:"auto", backgroundColor:"yellow", marginTop:"20px", textAlign:"center", borderRadius:"50px"}}>
<h1>Kanye West</h1>
<h3>{i}</h3>
</div>
)
})
return (
<>
<h1>Already {state} seconds</h1>
<div style={{display:"grid", gridTemplateColumns: "400px 400px 400px", marginLeft:"50px"}}>
{y}
</div>
</>
)
}
export default Post
