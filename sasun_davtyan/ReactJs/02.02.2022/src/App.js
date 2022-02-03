import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { Validate } from './components/input'
import { Posts } from './components/Posts'


function App() {
  return (
    <div className="App">
      <nav>
        <ul className="ul">
          <li>
            <Link to="/" style={{ color: 'white',fontSize:"25px" }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ color: 'white',fontSize:"25px" }}>About</Link>
          </li>
          <li>
            <Link to="/posts" style={{ color: 'white' ,fontSize:"25px"}}>Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Validate />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
