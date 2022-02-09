import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Slideshow } from './components/Slide';
import { Count } from './components/Count'
import { Error } from './components/Error'
import { AcordionApp } from './components/AccordionApp'
import { Search } from './components/Search'



function App() {
  return (
    <div className="App">
      <nav className="ul">
        <Link to="/" style={{ color: 'white', fontSize: "25px", textDecoration: "none" }}>Slide-Show</Link>
        <Link to="/accordion" style={{ color: 'white', fontSize: "25px", textDecoration: "none" }}>Accordion</Link>
        <Link to="/count" style={{ color: 'white', fontSize: "25px", textDecoration: "none" }}>Count</Link>
        <Link to="/search" style={{ color: 'white', fontSize: "25px", textDecoration: "none" }}>Search</Link>


      </nav>
      <Routes>
        <Route path="/" element={<Slideshow />} />
        <Route path="/accordion" element={<AcordionApp />} />
        <Route path="/count" element={<Count />} />
        <Route path="/search" element={<Search />} />

        <Route path="*" element={<Error />} />
      </Routes>



    </div>

  );
}

export default App;
