import logo from './logo.svg';
import './App.css';
import Post from './Components/Post';
import {
  BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';
import Home from './Components/HomeHi';
import Family from './Components/Family';
import PostById from './Components/PostById';

function App() {
  return (
    <>

      <div style={{display: "flex", width: "100px", margin: "auto", borderBlockColor: "black" }}>
      <button>
        <a href='/' >Home</a>
        </button>
        <button>
        <a href='/post' style={{ display: "flex",  }}>Post</a> 
        </button>
        
        <button>
        <a href='/family' style={{ display: "flex",  }}> Family</a>
        </button>
      </div>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family />} />
        <Route path="post/:index" element={<PostById/>}/>
      </Routes>
    </>

  );
}

export default App;
