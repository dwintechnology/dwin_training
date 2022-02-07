import Post from './Component/Post';
import {
BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';
import Text from './Component/Text';
import Text1 from './Component/Text1';
import Meow from './Component/Meow';
import Errors from './Component/Errors';
import Home from './Component/Home';
function App() {
return (
<>
<div style={{width:"100px", margin:"auto"}}>
<a href='/' style={{display:"block", marginBottom:"20px"}}>Home</a>    
<a href='/post' style={{display:"block", marginBottom:"20px"}}>Post</a>
<a href='/text' style={{display:"block", marginBottom:"20px"}} >K.W.</a>
<a href='/text1' style={{display:"block", marginTop:"5px"}}>K.K.</a>
</div>
<Routes>
<Route path="/post" element={<Post/>}/>
<Route path="/" element={<Home/>}/>
<Route path="/text" element={<Text/>}/>
<Route path="/text1" element={<Text1/>}/>
<Route path="post/:id" element={<Meow/>}/>
<Route path="*" element={<Errors/>}/>
</Routes>
</>
);
}

export default App;
