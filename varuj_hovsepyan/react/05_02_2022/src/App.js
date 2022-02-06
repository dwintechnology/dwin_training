import logo from './logo.svg';
import './App.css';
import Kanye from './Kanye/Kanye';
import Kanyim from './Kanye/Kanyimg';
import Kim from './Kanye/Kim';
import Child from './Kanye/Child';
import Childimg from './Kanye/Childimg';

import {
  BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';
import Card from './Card';
import Oops404 from './oops/oops404';

function App() {
  return (

    <>
    <div style={{width:"100px", display:"flex", marginTop:"50px"}}>
    <button style={{marginLeft:"500px"}}>
    <a href='/kanye' style={{textDecoration:"none", color:"red"}}>Kanye</a>
    </button>
    <button style={{marginLeft:"50px"}}>
    <a href='/' style={{textDecoration:"none", color:"blue"}}>Home</a>
    </button>
    <button style={{marginLeft:"50px"}}>
    <a href='/kim' style={{textDecoration:"none", color:"orange"}}>Kim</a>
    </button>
    <button style={{marginLeft:"50px"}}>
    <a href='/child' style={{textDecoration:"none", color:"orange"}}>Children</a>
    </button>
    
    </div>
    <Routes>
      <Route path="/kanye" element={<Kanye/>}/>
      <Route path="/" element={<Kanyim/>}/>
      <Route path="/kim" element={<Kim/>}/>
      <Route path="/child" element={<Child/>}/>
      <Route path="/child/childimg" element={<Childimg/>}/>
      <Route path="kanye/:id" element={<Card />} />
      <Route path="*" element={<Oops404/>}/>
    </Routes>
    </>
  );
}

export default App;
