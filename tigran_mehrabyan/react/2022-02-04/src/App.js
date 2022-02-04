import './App.css';
import GetKanye from './data';
import {
  BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <a href="/">Home</a>
      <a href="/kanye">Kanye</a>
    </div>
    <Routes>
    <Route path="/kanye" element={<GetKanye/>}/>
    </Routes>
     </>
  );
}

export default App;
