import logo from './logo.svg';
import './App.css';
import Bob from './data/Data';
import Esim from './data/Esim';
import Post from './data/Post';
// import Obj from './data/Obj';
function App() {
  return (
    <div style={{ margin:"5px 0px 100px 500px"}}>
      <Post obj={Bob}/>
     
      <Esim/>
    {/* <Obj/> */}
    </div>
  )
  
}

export default App;
