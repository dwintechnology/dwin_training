// import logo from './logo.svg';
// import './App.css';
import Post from "./Posts";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useRef} from "react";
import Data from './data/data.js'
import { Form } from "./form";
import {
  Route,
  Routes,
} from "react-router-dom";
import KanyeWest from './PostsTwitt'
import UnicPosts from './UnicPosts'
import Err from "./Eror404";

function App() {
  // const [value,setValue] = useState('')
  // const inputEl = useRef();
  // const onButtonClick = () => {
  //   console.log(inputEl.current.value)
  // };
  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<div className="App"><Post obj={Data} /></div>}/>
      <Route path={'/Home'} element={<div className="App"><Post obj={Data} /></div>}/>
      <Route path={'/Posts'} element={<KanyeWest/>}/>
      <Route path={'/Form'} element={ <Form/>}/>
      <Route path={'Posts/:i'} element={ <UnicPosts/>}/>
      <Route path={'*'} element={<Err/>}/>
    </Routes>
    {/* <h1>{value}</h1>
      <input type='text' value={value} onChange={(e)=>{
        setValue(e.target.value);
        console.log(value);
      }}>
      </input>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Установить фокус на поле ввода</button> */}
    <Footer/>
    </>
  );
}



export default App;
