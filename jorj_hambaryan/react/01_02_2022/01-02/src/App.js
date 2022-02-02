// import logo from './logo.svg';
// import './App.css';
import Post from "./Posts";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useRef} from "react";
import Data from './data/data.js'
import { Form } from "./form";

function App() {
  // const [value,setValue] = useState('')
  // const inputEl = useRef();
  // const onButtonClick = () => {
  //   console.log(inputEl.current.value)
  // };
  return (
    <>
      <Header/>
      <div className="App">
        <Post obj={Data} />
      </div>
      <Form />
      <Footer/>
      {/* <h1>{value}</h1>
      <input type='text' value={value} onChange={(e)=>{
        setValue(e.target.value);
        console.log(value);
      }}>
      </input>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Установить фокус на поле ввода</button> */}
    </>
  );
}



export default App;
