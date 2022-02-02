import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Foother from './components/Foother';

function App() {
  return (<div>
<Header/>
<div style={{display:"flex"}}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>
    <Foother/>
  </div>
    
  );
}

export default App;
