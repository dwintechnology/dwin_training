
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
function Post(){
let [post, setPost] = useState([])
let [state, setState] = useState(0);
useEffect(() => {
setInterval(() => {
setState((pre)=>{ return pre + 1});
   

}, 1000);
}, []);
useEffect(async() => {
let a = await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
let b = await a.json()
setPost(b)
})
let y = post.map((i,id)=>{
return (
<div key={id} style={{width:"300px", height:"auto", backgroundColor:"yellow", marginTop:"20px", textAlign:"center", borderRadius:"50px"}}>

{/*<h1>Kanye West</h1>*/}
<Link to={`/post/${id}`}>
{i}
</Link >
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
