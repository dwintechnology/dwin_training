import logo from './logo.svg';
import './App.css';
import Post from './Components/Post';
import {
  BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';
import Home from './Components/HomeHi';
 

function App() {
  return (
    <>
    
    <div style={{width:"100px", margin:"auto"}}>
    <a href='/post' style={{display:"block", marginBottom:"50px"}}>Post</a>
    <a href='/' >Home</a>
    </div>
    <Routes>
      <Route path="/post" element={<Post/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  
  );
}

export default App;
