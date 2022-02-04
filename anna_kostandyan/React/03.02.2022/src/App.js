import Post from './Component/Post';
import {
BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';
import Text from './Component/Text';

function App() {
return (
<>
<div style={{width:"100px", margin:"auto"}}>
<a href='/post' style={{display:"block", marginBottom:"50px"}}>K. W.</a>
<a href='/' >Home</a>
</div>
<Routes>
<Route path="/post" element={<Post/>}/>
<Route path="/" element={<Text/>}/>
</Routes>
</>
);
}

export default App;
