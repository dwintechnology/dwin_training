import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { Validate } from './components/input'
import { Posts } from './components/Posts'
import {SingalePage} from './components/singalePage'
import {Error} from './components/Error'

function App() {
  return (
    <div className="App">
      <nav className="ul">
            <Link to="/" style={{ color: 'white',fontSize:"25px",textDecoration: "none"}}>Home</Link>
            <Link to="/about" style={{ color: 'white',fontSize:"25px",textDecoration: "none" }}>About</Link>
            <Link to="/posts" style={{ color: 'white' ,fontSize:"25px",textDecoration: "none"}}>Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Validate />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id/title" element={<SingalePage />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
