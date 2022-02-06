import logo from './logo.svg';
import './App.css';
import Post from './Components/Post';
import {
  BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';
import Home from './Components/HomeHi';
import Family from './Components/Family';
import PostById from './Components/PostById';
import Error from './Components/Error';

function App() {
  return (
    <>

      <div style={{display: "flex", width: "100px", margin: "auto", borderBlockColor: "black" }}>
      <button style={{borderBlockColor:"GrayText", padding:"10px 20px",marginRight:"10px", borderRadius:"20px", fontSize:"20px"  }}>
        <a href='/' >Home</a>
        </button>
        <button style={{borderBlockColor:"GrayText", padding:"10px 20px",marginRight:"10px", borderRadius:"20px",fontSize:"20px" }}>
        <a href='/post' style={{ display: "flex",  }}>Post</a> 
        </button>
        
        <button style={{borderBlockColor:"GrayText", padding:"10px 20px",marginRight:"10px", borderRadius:"20px",fontSize:"20px" }}>
        <a href='/family' style={{ display: "flex",  }}> Family</a>
        </button>
      </div>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family />} />
        <Route path="post/:index" element={<PostById/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>

  );
}

export default App;
