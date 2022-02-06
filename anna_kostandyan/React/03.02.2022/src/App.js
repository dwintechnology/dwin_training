import Post from './Component/Post';
import {
BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';
import Text from './Component/Text';
import Text1 from './Component/Text1';

function App() {
return (
<>
<div style={{width:"100px", margin:"auto"}}>
<a href='/post' style={{display:"block", marginBottom:"20px"}}>Home</a>
<a href='/text' style={{display:"block", marginBottom:"20px"}} >K.W.</a>
<a href='/text1' style={{display:"block", marginTop:"5px"}}>K.K.</a>
</div>
<Routes>
<Route path="/post" element={<Post/>}/>
<Route path="/text" element={<Text/>}/>
<Route path="/text1" element={<Text1/>}/>
</Routes>
</>
);
}

export default App;
