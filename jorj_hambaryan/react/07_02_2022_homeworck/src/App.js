import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/level1';
import Level2 from './components/level2';

function App() {
  let [inputValue , setInputValue] = useState();
  let [del, setDel] = useState([]);

  return (
    <div className="App" style={{border:'1px solid black', margin: '25px'}}>
      <Header setInputValue={setInputValue} setDel={setDel}/>
      <Level2 inputValue={inputValue} del={del}/>
    </div>
  );
}

export default App;
