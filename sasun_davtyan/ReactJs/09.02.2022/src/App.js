import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

import './App.css';
import { Slideshow } from './components/Slide';
import { Count } from './components/Count'
import { Error } from './components/Error'
import { AcordionList } from './components/AcordionList'
import { Form } from './components/Form'

// const names = ['apple ', 'pinapple ', 'samsung ' , 'xiaomi ', 'banana ' ]

function App() {
  const [item, setItem] = useState("");
  return (
    <div className="App">
      <nav className="ul">
        <Link to="/" style={{ color: 'white', fontSize: "25px", textDecoration: "none" }}>Slide-Show</Link>
        <Link to="/accordion" style={{ color: 'white', fontSize: "25px", textDecoration: "none" }}>Accordion</Link>
        <Link to="/count" style={{ color: 'white', fontSize: "25px", textDecoration: "none" }}>Count</Link>
        <Link to="/form" style={{ color: 'white', fontSize: "25px", textDecoration: "none" }}>Form</Link>
        <input className="search" type="search" value={item} onChange={e => setItem(e.target.value)} placeholder=" Search..." />

      </nav>
      <Routes>
        <Route path="/" element={<Slideshow />} />
        <Route path="/accordion" element={<AcordionList />} />
        <Route path="/count" element={<Count item={item} setItem={setItem} />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>



    </div>

  );
}

export default App;
