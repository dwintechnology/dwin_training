import './App.css';
import {
  BrowserRouter as Router, Route, Link, Routes
} from 'react-router-dom';
import Posts from './components/Posts';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import NotFound from './components/NotFound.jsx';

function App() {
  return(
    <>
      <button>
        <a href="/">Home</a>
        </button> 
        <button>
        <a href="/posts">Posts</a>
        </button>
        
      
       <Routes>
         <Route path="/" element = {<Home/>} />
         <Route path="/posts" element = {<Posts/>} />
         <Route path = "/posts/:i/title" element = {<SinglePost/>} />
         <Route path="*" element = {<NotFound />} />
      </Routes>

    </>
  )
}

export default App;
