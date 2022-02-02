// import logo from './logo.svg';
// import './App.css';
import Post from "./Posts";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header/>
      <div className="App">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      <Footer/>
    </>
  );
}



export default App;
