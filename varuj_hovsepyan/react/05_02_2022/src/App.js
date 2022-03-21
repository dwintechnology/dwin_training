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
import Button from './Button';

function App() {
  return (

    <>
  
    <Routes>
     
      <Route  path="/posts" element={<Kanye/>}/>
      <Route path="/" element={<Kanyim/>}/>
      <Route path="/kim" element={<Kim/>}/>
      <Route path="/child" element={<Child/>}/>
      <Route path="/child/childimg" element={<Childimg/>}/>
      <Route path="posts/:id" element={<Card />} />
      <Route  path="/posts/valod" element={<Kanye/>}/>
      
      <Route path="*" element={<Oops404/>}/>
    </Routes>
    </>
  );
}

export default App;
