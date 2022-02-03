import logo from './logo.svg';
import './App.css';
import Kanye from './Kanye/Kanye';
import Kanyim from './Kanye/Kanyimg';
import {
  BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';

function App() {
  return (
   
    <>
    <div style={{width:"100px", margin:"auto"}}>
    <a href='/kanye' style={{display:"block", marginBottom:"50px"}}>Kanye</a>
    <a href='/' >Home</a>
    </div>
    <Routes>
     
      
     
      <Route path="/kanye" element={<Kanye/>}/>
      <Route path="/" element={<Kanyim/>}/>
    </Routes>
    </>
  );
}

export default App;
