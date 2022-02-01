import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header/>
    <div style={{display:"flex"}}>
    <Post/>
    <Post/>
    <Post/>
    </div>
    <div style={{display:"flex"}}>
    <Post/>
    <Post/>
    <Post/>
    </div>
    <Footer/>
    </div>
    
    
  )
}

export default App;
